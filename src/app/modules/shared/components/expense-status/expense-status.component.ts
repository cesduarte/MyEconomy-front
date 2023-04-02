import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expense-status',
  templateUrl: './expense-status.component.html',
  styleUrls: ['./expense-status.component.scss']
})
export class ExpenseStatusComponent {

  @Input() status: any;

  @Output() payEmiter = new EventEmitter();

  payExpense() {
    this.payEmiter.emit();
  }

  getIcon() : string {
    if(this.status == 2){
      return "pi pi-check"
    }
     return "pi pi-lock-open"
  }
  getDescription() : string {
    if(this.status == 2){
      return "Paga"
    }
     return "A pagar"
  }
  getClass(): string {
    if(this.status == 2){
      return "btn p-button-success btn-sm"
    }
     return "btn p-button-warning btn-sm"
  }
}
