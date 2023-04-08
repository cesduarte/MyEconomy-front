import { Component } from '@angular/core';
import * as moment from 'moment';
import { ExpenseDetails } from 'src/app/models/expenseDetails';
import { ExpenseFilters } from 'src/app/models/expenseFilter';
import { ExpenseDetailService } from 'src/app/services/expense-detail.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent {

  expenseList: ExpenseDetails[] = []

  filter!: ExpenseFilters

  report: relatorio[] = []

  constructor(private readonly expenseDtService: ExpenseDetailService) { }

  async ngOnInit(): Promise<void> {

    this.getDefaultFilter();

    await this.loadExpenses();

    await this.createReport();

    this.expenseDtService.updateExpense.subscribe(async (Expense) => {
      this.loadExpenses();
    });
  }

  getDefaultFilter() {

    this.filter = {} as ExpenseFilters;
    const currentYear = new Date().getFullYear();

    const firstDay = new Date(currentYear, 0, 1);
    const lastDay = new Date(currentYear, 11, 31);

    this.filter.startDate = moment(firstDay).format('YYYY-MM-DD');
    this.filter.lastDate = moment(lastDay).format('YYYY-MM-DD');

    this.filter.typeId = 0;
    this.filter.statusId = 0

    this.filter.categoryId = 0;
    this.filter.userId = 0;

    this.filter.active = true;
  }

  async loadExpenses(): Promise<void> {
    try {

      this.expenseList = await this.expenseDtService.getByFilters(this.filter);

    } catch (error) {
      console.log(error)
    }
    finally {

    }
  }

  async createReport() {
    var teste = this.groupBy(this.expenseList, (s: { dueDay: Date; }) => new Date(s.dueDay).getMonth())


    for (let superGrupo of teste.values()) {
      this.report.push({
        // month: new Date(superGrupo[0].dueDay).getMonth().push(moment().month(obj.month-1).format('MMM'));,
        month: this.getMonthDescription(new Date(superGrupo[0].dueDay)),
        period:this.getPeriodMonth(new Date(superGrupo[0].dueDay)),
        reportValues: this.createReportValues(superGrupo)


      })
    }

  }
  createReportValues(expenseList: ExpenseDetails[]): reportValue[] {
    let rp: reportValue[] = [];
    rp.push({
      expenseFixed: this.sumExpense(expenseList, 1),
      expenseVariable: this.sumExpense(expenseList, 2),
    })
    return rp
  }
  getMonthDescription(data: Date): string {

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agusto", "Setemrbo", "Outubro", "Novembro", "Dezembro"
    ];

    return monthNames[data.getMonth()];
  }
  groupBy(data: any, keyGetter: any) {
    const map = new Map();
    data.forEach((item: any) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }
  sumExpense(expenseList: ExpenseDetails[], typeId: number): number {
    var total = 0;

    expenseList.forEach(dt => {
      if (dt.expense.expenseType == typeId) {
        total += dt.expenseValue;
      }
    });
    return total;
  }
  getPeriodMonth(date: Date): string{
    var firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    return firstDate.toLocaleDateString() + ' a ' + lastDate.toLocaleDateString()
  }
}
class relatorio {
  month!: string;
  period!: string;
  reportValues!: reportValue[];

}
class reportValue {
  expenseFixed!: number
  expenseVariable!: Number
}
