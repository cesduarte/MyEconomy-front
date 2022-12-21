import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: 'user',
  loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)
},{
  path: 'classification',
  loadChildren: () => import('./views/classification/classification.module').then(m => m.ClassificationModule)
}
,{
  path: 'expense',
  loadChildren: () => import('./views/expense/expense.module').then(m => m.ExpenseModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
