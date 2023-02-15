import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
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

  @Output() displayChange = new EventEmitter();

  @Input() displayBasic2 = true;


  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly expenseService: ExpenseService,
    private primengConfig: PrimeNGConfig,
  ) { }

  async ngOnInit(): Promise<void> {
    this.primengConfig.ripple = true;

  }

  onClose() {
    this.displayChange.emit(false);
  }
  ngOnChanges() {
    this.iniciaForm();
  }
  async iniciaForm() {
    this.form = this.formBuilder.group({
      description: [this.expense?.description, [Validators.required]],
      dueDate: [this.expense?.dueDate],
      installments: [this.expense?.installments],
      expenseValue: [this.expense?.expenseValue],
      idUser: [this.expense?.idUser]
    });
    console.log(this.expense)
  }
  async save() {

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
