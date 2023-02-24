import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  @Input() category!: Category;
  form!: FormGroup;

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private localeService: BsLocaleService,
    private readonly categoryService: CategoryService
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.iniciaForm()
  }

  async iniciaForm() {
    this.form = this.formBuilder.group({
      description: [this.category?.description, [Validators.required]],
    });
  }

  async save() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
    }

    else {
      try {
        const category = await this.categoryService.save(this.form.value, this.category?.id);

        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: `Categoria ${this.category ? 'alterada' : 'criada'} com sucesso!`
        }).then(() => {
          this.bsModalRef.hide()
          this.categoryService.update.emit(this.category ? category : true);
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

