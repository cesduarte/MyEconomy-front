import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expense-status',
  templateUrl: './expense-status.component.html',
  styleUrls: ['./expense-status.component.scss']
})
export class ExpenseStatusComponent {

  @Input() status: any;

  @Input() type: number = 1;

  @Output() deleteExpenseEmiter = new EventEmitter();
  @Output() updateExpenseEmiter = new EventEmitter();


  getDescription(): string {
    return this.status == 1 ? "Não" : "Sim";
  }
  getColor(): string {
    return "p-button-sm " + (this.status == 1 ? "p-button-warning" : "p-button-success");
  }
  getIcon(): string {
    return this.status == 1 ? "pi pi-times-circle" : "pi pi-check-circle";
  }

  deleteExpense(){
    this.deleteExpenseEmiter.emit();
  }
  updateExpense(){
    this.updateExpenseEmiter.emit();
  }
}
