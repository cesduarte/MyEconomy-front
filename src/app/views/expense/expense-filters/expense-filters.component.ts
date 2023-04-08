import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { Category } from 'src/app/models/category';
import { ExpenseFilters } from 'src/app/models/expenseFilter';
import { User } from 'src/app/models/user';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-expense-filters',
  templateUrl: './expense-filters.component.html',
  styleUrls: ['./expense-filters.component.scss']
})
export class ExpenseFiltersComponent {

  users: User[] = []

  categories: Category[] = []

  filter!: ExpenseFilters;

  form!: FormGroup;

  @Output() filterEmiter = new EventEmitter();

  showFilterDate: boolean = true;

  showFilterStatus: boolean = true;

  showFilterType:boolean = true;

  showFilterActive:boolean = true;

  public onClose!: Subject<any>;

  constructor(
    private readonly formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService,
  ) { }
  async ngOnInit(): Promise<void> {

    this.onClose = new Subject();

    await this.startForm();

    await this.loadCategory();

    await this.loadUsers();
  }
  async startForm() {
    this.form = this.formBuilder.group({
      startDate: [this.filter?.startDate],
      lastDate: [this.filter?.lastDate],
      categoryId: [this.filter?.categoryId],
      userId: [this.filter?.userId],
      typeId: [this.filter?.typeId],
      statusId: [this.filter?.statusId],
      active: [this.filter?.active]
    });
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

  public onConfirm(): void {
    this.onClose.next(this.form);
    this.bsModalRef.hide();
  }
  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && (campoForm.dirty || campoForm.touched) };
  }
}
