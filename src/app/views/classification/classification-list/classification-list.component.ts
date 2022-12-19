import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

@Component({
  selector: 'app-classification-list',
  templateUrl: './classification-list.component.html',
  styleUrls: ['./classification-list.component.scss']
})
export class ClassificationListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'editar', 'excluir'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ClassificationDetailComponent);

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
