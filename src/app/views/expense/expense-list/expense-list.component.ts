import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDeleteComponent } from 'src/app/helpers/modal-delete/modal-delete.component';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ExpenseDetailComponent } from '../expense-detail/expense-detail.component';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['description','editar', 'excluir'];

  dataSource = new MatTableDataSource<Expense>();

  constructor(
    private readonly dialog: MatDialog,
    private readonly loader: LoaderService,
    private readonly expenseService: ExpenseService
    ) { }

  async ngOnInit(): Promise<void> {
		await this.loadExpenses();

    this.expenseService.updateExpense.subscribe(async (Expense) => {
			this.loadExpenses();
		});
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  async loadExpenses(): Promise<void> {
    this.loader.setLoading(true)

    try {
      this.dataSource.data = await this.expenseService.get();
      console.log(await this.expenseService.get())
    } catch (error) {
      console.log(error)
    }
    finally{
      this.loader.setLoading(false)
    }
	}

  openDialog(obj:any) {
    const dialogRef = this.dialog.open(ExpenseDetailComponent);

    if (obj) dialogRef.componentInstance.expense = obj;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogDelete() {
    const dialogRef = this.dialog.open(ModalDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue;
  }

}
