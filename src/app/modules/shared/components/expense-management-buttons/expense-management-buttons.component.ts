import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense-management-buttons',
  templateUrl: './expense-management-buttons.component.html',
  styleUrls: ['./expense-management-buttons.component.scss']
})
export class ExpenseManagementButtonsComponent {

  @Input() status: any;
}
