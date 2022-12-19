import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
  declarations: [
    UserComponent,
    ProfileDetailComponent,
    ProfileListComponent,
    ]
})
export class UserModule { }
