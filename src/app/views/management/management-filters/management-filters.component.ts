import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { Category } from 'src/app/models/category';
import { ExpenseFilters } from 'src/app/models/expenseFilter';
import { User } from 'src/app/models/user';
import { CategoryService } from 'src/app/services/category.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-management-filters',
  templateUrl: './management-filters.component.html',
  styleUrls: ['./management-filters.component.scss']
})
export class ManagementFiltersComponent {

  users: User[] = []

  categories: Category[] = []

  filter!: ExpenseFilters;

  form!: FormGroup;

  @Output() filterEmiter = new EventEmitter();

  public onClose!: Subject<any>;

  constructor(
    private readonly formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.onClose = new Subject();

    await this.startForm();

    await this.loadCategory();

    await this.loadUsers();
  }
  async startForm() {
    this.form = this.formBuilder.group({
      startDate: [this.filter?.startDate],
      finalDate: [this.filter?.FinalDate],
      categoryId: [this.filter?.category],
      userId: [this.filter?.user],
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
