import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';


import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { UserRoutingModule } from './user-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderCardComponent } from '../header-card/header-card.component';



@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatMenuModule
  ],
  declarations: [
    UserComponent,
    ProfileDetailComponent,
    ProfileListComponent,
  HeaderCardComponent]
})
export class UserModule { }
