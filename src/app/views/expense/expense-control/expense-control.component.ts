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
      { label: 'fixa', icon: 'pi pi-fw pi-home', id: "1" },
      { label: 'variável', icon: 'pi pi-fw pi-calendar', id: "2" }
    ];
  }
}
