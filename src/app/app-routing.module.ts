import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: 'user',
  loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)
}
,{
  path: 'expense',
  loadChildren: () => import('./views/expense/expense.module').then(m => m.ExpenseModule)
},{
  path:'category',
  loadChildren: () => import('./views/category/category.module').then(m => m.CategoryModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
