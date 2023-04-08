import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Sintético geral', icon: 'pi pi-money-bill', id: "1" },
      { label: 'Por Usuários', icon: 'pi pi-money-bill', id: "2" },
      { label: 'Por Categoria', icon: 'pi pi-money-bill', id: "3" }
    ];
  }
}
