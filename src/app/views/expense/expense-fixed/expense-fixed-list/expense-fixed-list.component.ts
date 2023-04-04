import { Component, Input, Output } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';
import { ExpenseDetailComponent } from '../../expense-detail/expense-detail.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-expense-fixed-list',
  templateUrl: './expense-fixed-list.component.html',
  styleUrls: ['./expense-fixed-list.component.scss']
})
export class ExpenseFixedListComponent {

  @Input() expenseList: Expense[] = []

  bsModalRef?: BsModalRef

  constructor(
    private readonly expenseService: ExpenseService,
    private readonly modalService: BsModalService,
  ) { }

  openDialog(obj: any) {
    const initialState: ModalOptions = {
      initialState: {
        expense: obj,
        isInclusao: !obj
      },
      class: 'mymodal-dialog-lg modal-dialog-centered'
    };

    this.bsModalRef = this.modalService.show(ExpenseDetailComponent,
      initialState
    );
  }
  delete(expense: Expense) {
    Swal.fire({
      icon: 'warning',
      title: 'Tem certeza que deseja deletar?',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: `Cancelar`,
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await this.expenseService.delete(expense.id)
          await Swal.fire('Despesa deletada com sucesso!', '', 'success')
        }
        catch (error) {
          console.error('enviaForm', error);
        }
        finally {
          this.expenseService.updateExpense.emit(expense ? expense : true);
        }
      }
    })
  }


}
