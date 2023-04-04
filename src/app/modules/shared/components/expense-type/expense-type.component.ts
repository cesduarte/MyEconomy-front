import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-type.component.html',
  styleUrls: ['./expense-type.component.scss']
})
export class ExpenseTypeComponent {

  @Input() type: any;

  getDescription(): string {
    if (this.type == 1) {
      return "Fixa"
    }
    return "Variável"
  }
  getColor(): string {
    if (this.type == 1) {
      return "primary"
    }
    return "warning"
  }
}
