import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './views/user/profile/profile-list/profile-list.component';

const routes: Routes = [

{
  path: 'users',
  loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
