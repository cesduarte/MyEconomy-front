import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense-status',
  templateUrl: './expense-status.component.html',
  styleUrls: ['./expense-status.component.scss']
})
export class ExpenseStatusComponent {

  @Input() status: any;

  getIcon() : string {
    if(this.status == 2){
      return "pi pi-lock"
    }
     return "pi pi-lock-open"
  }
  getDescription() : string {
    if(this.status == 2){
      return "Paga"
    }
     return "A pagar"
  }
  getColor(): string {
    if(this.status == 2){
      return "success"
    }
     return "primary"
  }
}
