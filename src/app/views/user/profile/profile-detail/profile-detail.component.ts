import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Despesas', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Classificação', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Plano', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Relatórios', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Usuários', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Perfil', weight: 12.0107, symbol: 'C'}
];

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  displayedColumns: string[] = ['name','pesquisar','incluir', 'alterar', 'excluir'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }
  

}
