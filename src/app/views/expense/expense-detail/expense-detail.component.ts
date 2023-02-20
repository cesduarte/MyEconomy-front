import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
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
  isInclusao: boolean = false;


  get f(): any {
    return this.form.controls;
  }


  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly expenseService: ExpenseService,
    public bsModalRef: BsModalRef
  ) { }

  async ngOnInit(): Promise<void> {
    this.iniciaForm()
  }

  async iniciaForm() {

    if (this.isInclusao) {
      this.form = this.formBuilder.group({
        description: [this.expense?.description, [Validators.required]],
        dueDate: [this.expense?.dueDate, [Validators.required]],
        installments: [this.expense?.installments, [Validators.required]],
        expenseValue: [this.expense?.expenseValue, [Validators.required]],
        idUser: [this.expense?.idUser]
      });
    }
    else {
      this.form = this.formBuilder.group({
        description: [this.expense?.description, [Validators.required]],
        idUser: [this.expense?.idUser]
      });
    }
  }
  async save() {

    if (!this.form.valid) {
      this.form.markAllAsTouched();
    }

    else {

      try {
        const expense = await this.expenseService.save(this.form.value, this.expense?.id);

        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: `Despesa ${this.expense ? 'alterada' : 'criada'} com sucesso!`
        }).then(() => {
          this.bsModalRef.hide()
          this.expenseService.updateExpense.emit(this.expense ? expense : true);
        });
      } catch (error) {
        console.error('enviaForm', error);
      }
    }
  }
  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

}
