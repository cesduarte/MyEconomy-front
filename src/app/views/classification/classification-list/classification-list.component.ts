import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBreadcrumbItem } from 'src/app/core/interfaces/breadcrumb-item';
import { ModalDeleteComponent } from 'src/app/helpers/modal-delete/modal-delete.component';
import { Classification } from 'src/app/models/classification';
import { ClassificationService } from 'src/app/services/classification.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ClassificationDetailComponent } from '../classification-detail/classification-detail.component';

type NewType = IBreadcrumbItem[];
@Component({
  selector: 'app-classification-list',
  templateUrl: './classification-list.component.html',
  styleUrls: ['./classification-list.component.scss']
})
export class ClassificationListComponent implements OnInit {

  classifications: Classification[]  = [];

  displayedColumns: string[] = ['description','editar', 'excluir'];

  pageTitle: NewType = [];


  constructor(
    private readonly dialog: MatDialog,
    private readonly loader: LoaderService,
    private readonly classificationService: ClassificationService
    ) { }

  // ngOnInit() {
  //   this.loader.setLoading(true)
  // }
  async ngOnInit(): Promise<void> {
		await this.loadClassifications();

    this.classificationService.updateClassification.subscribe(async (classification) => {
			if (typeof classification === 'object') {
				const busca = this.classifications.find((s: any) => s.id === classification.id);
				if (busca) Object.assign(busca, classification);
			} else await this.loadClassifications();
		});
  }
  async loadClassifications(): Promise<void> {
    this.loader.setLoading(true)
    try {
      this.classifications = await this.classificationService.get();
    } catch (error) {

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

}
