import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSnackBarModule} from '@angular/material/snack-bar';

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
import {MatDialogModule} from '@angular/material/dialog';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PageFilterAddComponent } from './components/page-filter-add/page-filter-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageTitleComponent,
    PageFilterAddComponent,

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    ],
  exports:[
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
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSnackBarModule,
    PageTitleComponent,
    PageFilterAddComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
