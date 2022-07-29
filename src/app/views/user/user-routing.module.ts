import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';


const routes: Routes = [

{
  path: 'profile',
  component: ProfileListComponent
},
{
  path: 'detail',
  component: ProfileDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
