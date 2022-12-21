import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss']
})
export class ExpenseDetailComponent implements OnInit {

  @Input() expense!: Expense;

  form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly expenseService: ExpenseService
    ) { }

  async ngOnInit(): Promise<void> {
    this.iniciaForm();
  }

  async iniciaForm() {
		this.form = this.formBuilder.group({
			description: [this.expense?.description, [Validators.required]],
		});
	}
  async save(){

    if (!this.form.valid) return;

		try {
			const expense = await this.expenseService.save(this.form.value, this.expense?.id);

			Swal.fire({
				icon: 'success',
				title: 'Sucesso',
				text: `Classificação ${this.expense ? 'alterada' : 'criada'} com sucesso!`
			}).then(() => {
				this.expenseService.updateExpense.emit(this.expense ? expense : true);
			});
		} catch (error) {
			console.error('enviaForm', error);
		}
  }


}
