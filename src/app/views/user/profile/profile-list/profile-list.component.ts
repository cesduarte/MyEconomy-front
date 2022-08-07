import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalDeleteComponent } from 'src/app/helpers/modal-delete/modal-delete.component';
import { ProfileDetailComponent } from '../profile-detail/profile-detail.component';
import { ProfileSearchComponent } from '../profile-search/profile-search.component';

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
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'editar', 'excluir'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProfileDetailComponent);

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

  openDialogSearch(){
    const dialogRef = this.dialog.open(ProfileSearchComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
