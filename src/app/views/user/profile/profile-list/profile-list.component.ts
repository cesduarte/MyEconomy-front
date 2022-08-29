import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBreadcrumbItem } from 'src/app/core/interfaces/breadcrumb-item';
import { ModalDeleteComponent } from 'src/app/helpers/modal-delete/modal-delete.component';
import { ProfileDetailComponent } from '../profile-detail/profile-detail.component';


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
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'editar', 'excluir'];
  dataSource = ELEMENT_DATA;
  pageTitle: NewType = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.pageTitle = [			
			{ label: 'Home', path: '/home', active: true },
      { label: 'Perfil', path: '/perfil', active: true }
		];
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

}
