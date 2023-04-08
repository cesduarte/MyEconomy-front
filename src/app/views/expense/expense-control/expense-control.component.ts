import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-expense-control',
  templateUrl: './expense-control.component.html',
  styleUrls: ['./expense-control.component.scss']
})
export class ExpenseControlComponent {

  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'fixas', icon: 'pi pi-money-bill', id: "1" },
      { label: 'variáveis', icon: 'pi pi-money-bill', id: "2" }
    ];
  }
}
