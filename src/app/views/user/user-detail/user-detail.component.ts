import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user!: User;
  form!: FormGroup;

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private localeService: BsLocaleService,
    private readonly userService: UserService
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.iniciaForm()
  }

  async iniciaForm() {
    this.form = this.formBuilder.group({
      fullName: [this.user?.fullName, [Validators.required]],
      email: [this.user?.email, [Validators.required, Validators.email]],
    });
  }

  async save() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
    }

    else {
      try {
        const user = await this.userService.save(this.form.value, this.user?.id);

        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: `Usuário ${this.user ? 'alterado' : 'criado'} com sucesso!`
        }).then(() => {
          this.bsModalRef.hide()
          this.userService.update.emit(this.user ? user : true);
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
