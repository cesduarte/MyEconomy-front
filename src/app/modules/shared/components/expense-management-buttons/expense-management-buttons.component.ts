import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expense-management-buttons',
  templateUrl: './expense-management-buttons.component.html',
  styleUrls: ['./expense-management-buttons.component.scss']
})
export class ExpenseManagementButtonsComponent {

  @Input() status: any;

  @Output() payEmiter = new EventEmitter();

  payExpense() {
    this.payEmiter.emit();
  }
}
