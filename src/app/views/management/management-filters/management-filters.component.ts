import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/models/category';
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

  constructor(
    private readonly formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService,
    ) {
  }

  async ngOnInit(): Promise<void> {
    await this.loadCategory()
    await this.loadUsers();
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

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && (campoForm.dirty || campoForm.touched) };
  }
}
