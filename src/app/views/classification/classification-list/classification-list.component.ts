import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBreadcrumbItem } from 'src/app/core/interfaces/breadcrumb-item';
import { ModalDeleteComponent } from 'src/app/helpers/modal-delete/modal-delete.component';
import { ClassificationDetailComponent } from '../classification-detail/classification-detail.component';

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Admin', weight: 1.0079, symbol: 'H'},
  {name: 'Suporte', weight: 4.0026, symbol: 'He'},
  {name: 'DEV', weight: 6.941, symbol: 'Li'},
];

type NewType = IBreadcrumbItem[];
@Component({
  selector: 'app-classification-list',
  templateUrl: './classification-list.component.html',
  styleUrls: ['./classification-list.component.scss']
})
export class ClassificationListComponent implements OnInit {

  @Input() classifications:any[] = [];

  displayedColumns: string[] = ['description','editar', 'excluir'];
  dataSource = ELEMENT_DATA;
  pageTitle: NewType = [];


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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
