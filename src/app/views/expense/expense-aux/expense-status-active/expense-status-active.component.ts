import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense-status-active',
  templateUrl: './expense-status-active.component.html',
  styleUrls: ['./expense-status-active.component.scss']
})
export class ExpenseStatusActiveComponent {

  @Input() active!: boolean;

  getDescription() : string {
    return this.active? "Sim": "Não"
  }
  getColor(): string {
    return this.active? "success": "danger"
  }
}
