import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerDirective, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PrimeNGConfig } from 'primeng/api';
import { Subject } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Expense } from 'src/app/models/expense';
import { User } from 'src/app/models/user';
import { CategoryService } from 'src/app/services/category.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { UserService } from 'src/app/services/user.service';
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
  users: User[] = []
  categories: Category[] = []
  userSelected!: number;
  typeId: number = 1
  public onClose!: Subject<any>;

  get f(): any {
    return this.form.controls;
  }
  get bsConfig(): any {
    return {
      adaptivePosition: true,
      dateInputFormat: 'DD/MM/YYYY',
      showWeekNumbers: false,
      isAnimated: true
    }
  }


  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly expenseService: ExpenseService,
    public bsModalRef: BsModalRef,
    private localeService: BsLocaleService,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService
  ) {
    this.localeService.use('pt-br');
  }

  async ngOnInit(): Promise<void> {
    this.onClose = new Subject();
    this.iniciaForm()
    await this.loadCategory()
    await this.loadUsers();
  }

  async iniciaForm() {

    if (this.isInclusao) {
      this.form = this.formBuilder.group({
        description: [this.expense?.description, [Validators.required]],
        dueDate: [this.expense?.dueDate, [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
        installments: [this.expense?.installments, [Validators.required]],
        expenseValue: [this.expense?.expenseValue, [Validators.required]],
        userid: [this.expense?.user?.id],
        categoryid: [this.expense?.category?.id],
        typeId: [this.typeId]
      });
    }
    else {
      this.form = this.formBuilder.group({
        description: [this.expense?.description, [Validators.required]],
        userid: [this.expense?.user?.id, [Validators.required]],
        categoryid: [this.expense?.category?.id, [Validators.required]]
      });
    }
  }
  async loadUsers() {
    try {
      this.users = await this.userService.get();

    } catch (error) {
      console.log(error)
    }
  }
  async loadCategory() {
    try {
      this.categories = await this.categoryService.get();

    } catch (error) {
      console.log(error)
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
          this.onClose.next(this.form);
            this.bsModalRef.hide();
        });
      } catch (error) {
        console.error('enviaForm', error);
      }
    }
  }
  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && (campoForm.dirty || campoForm.touched) };
  }


}
