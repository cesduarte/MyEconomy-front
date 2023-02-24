import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  list: User[] = []

  bsModalRef?: BsModalRef

  constructor(
    private modalService: BsModalService,
    private readonly userService: UserService
    ) { }


  async ngOnInit(): Promise<void> {

    await this.loadList();

    this.userService.update.subscribe(async (user) => {
      this.loadList();
    });
  }
  async loadList(): Promise<void> {
    try {
      this.list = await this.userService.get();
    } catch (error) {

      console.log(error)
    }
    finally {

    }
  }

  openDialog(obj: any) {
    const initialState: ModalOptions = {
      initialState: {
        user: obj,
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(UserDetailComponent,
      initialState
    );

  }
  delete(user: User) {
    Swal.fire({
      icon: 'warning',
      title: 'Tem certeza que deseja deletar?',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          this.userService.delete(user.id)
          Swal.fire('usuário deletado com sucesso!', '', 'success')
        }
        catch (error) {
          console.error('enviaForm', error);
        }
        finally{
          this.userService.update.emit(user ? user : true);
        }
      }
    })


  }

}
