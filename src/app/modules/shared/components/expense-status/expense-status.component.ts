import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expense-status',
  templateUrl: './expense-status.component.html',
  styleUrls: ['./expense-status.component.scss']
})
export class ExpenseStatusComponent {

  @Input() status: any;

  getDescription() : string {
    if(this.status == 2){
      return "Sim"
    }
     return "Não"
  }
  getColor(): string {
    if(this.status == 2){
      return "success"
    }
     return "danger"
  }
}
