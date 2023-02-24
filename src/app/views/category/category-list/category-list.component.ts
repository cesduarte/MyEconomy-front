import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import { CategoryDetailComponent } from '../category-detail/category-detail.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit  {


  list: Category[] = []

  bsModalRef?: BsModalRef

  constructor(
    private modalService: BsModalService,
    private readonly categoryService: CategoryService
    ) { }


  async ngOnInit(): Promise<void> {

    await this.loadList();

    this.categoryService.update.subscribe(async (user) => {
      this.loadList();
    });
  }
  async loadList(): Promise<void> {
    try {
      this.list = await this.categoryService.get();
    } catch (error) {

      console.log(error)
    }
    finally {

    }
  }

  openDialog(obj: any) {
    const initialState: ModalOptions = {
      initialState: {
        category: obj,
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(CategoryDetailComponent,
      initialState
    );

  }
  delete(category: Category) {
    Swal.fire({
      icon: 'warning',
      title: 'Tem certeza que deseja deletar?',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          this.categoryService.delete(category.id)
          Swal.fire('usuário deletado com sucesso!', '', 'success')
        }
        catch (error) {
          console.error('enviaForm', error);
        }
        finally{
          this.categoryService.update.emit(category ? category : true);
        }
      }
    })


  }

}

