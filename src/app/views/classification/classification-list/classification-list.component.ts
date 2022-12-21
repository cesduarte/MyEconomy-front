import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IBreadcrumbItem } from 'src/app/core/interfaces/breadcrumb-item';
import { ModalDeleteComponent } from 'src/app/helpers/modal-delete/modal-delete.component';
import { Classification } from 'src/app/models/classification';
import { ClassificationService } from 'src/app/services/classification.service';
import { LoaderService } from 'src/app/services/loader.service';
import { PeriodicElement } from '../../user/profile/profile-detail/profile-detail.component';
import { ClassificationDetailComponent } from '../classification-detail/classification-detail.component';

type NewType = IBreadcrumbItem[];
@Component({
  selector: 'app-classification-list',
  templateUrl: './classification-list.component.html',
  styleUrls: ['./classification-list.component.scss']
})
export class ClassificationListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['description','editar', 'excluir'];

  pageTitle: NewType = [];

  dataSource = new MatTableDataSource<Classification>();

  constructor(
    private readonly dialog: MatDialog,
    private readonly loader: LoaderService,
    private readonly classificationService: ClassificationService
    ) { }

  async ngOnInit(): Promise<void> {
		await this.loadClassifications();

    this.classificationService.updateClassification.subscribe(async (classification) => {
			this.loadClassifications();
		});
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  async loadClassifications(): Promise<void> {
    this.loader.setLoading(true)

    try {
      this.dataSource.data = await this.classificationService.get();
    } catch (error) {
      console.log(error)
    }
    finally{
      this.loader.setLoading(false)
    }
	}

  openDialog(obj:any) {
    const dialogRef = this.dialog.open(ClassificationDetailComponent);

    if (obj) dialogRef.componentInstance.classification = obj;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogDelete() {
    const dialogRef = this.dialog.open(ModalDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue;
  }

}
