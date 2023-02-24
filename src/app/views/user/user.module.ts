import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailComponent,
    ]
})
export class UserModule { }
