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

import { PageTitleComponent } from './components/page-title/page-title.component';
import { PageFilterAddComponent } from './components/page-filter-add/page-filter-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { DatetimeFormatPipe } from 'src/app/pipes/datetime-format.pipe';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { FieldsetModule } from 'primeng/fieldset';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { BadgeModule } from 'primeng/badge';
import { ExpenseStatusComponent } from './components/expense-status/expense-status.component';
import { ExpenseManagementButtonsComponent } from './components/expense-management-buttons/expense-management-buttons.component';
import { ExpenseTypeComponent } from './components/expense-type/expense-type.component';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { AvatarModule } from 'primeng/avatar';

defineLocale('pt-br', ptBrLocale);
@NgModule({
  declarations: [
    PageTitleComponent,
    PageFilterAddComponent,
    SpinnerComponent,
    DatetimeFormatPipe,
    ExpenseStatusComponent,
    ExpenseManagementButtonsComponent,
    ExpenseTypeComponent,

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
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    PanelModule,
    CardModule,
    InputTextModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BreadcrumbModule,
    MenuModule,
    RippleModule,
    TagModule,
    DividerModule,
    FieldsetModule,
    ChipModule,
    ChipsModule,
    BadgeModule,
    TabViewModule,
    TabMenuModule,
    AvatarModule

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
    MatCheckboxModule,
    MatSnackBarModule,
    PageTitleComponent,
    PageFilterAddComponent,
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent,
    FieldsetModule,
    DatetimeFormatPipe,
    TableModule,
    ButtonModule,
    ToolbarModule,
    PanelModule,
    CardModule,
    InputTextModule,
    ModalModule,
    BsDatepickerModule,
    BreadcrumbModule,
    MenuModule,
    RippleModule,
    TagModule,
    DividerModule,
    ChipModule,
    ChipsModule,
    BadgeModule,
    ExpenseStatusComponent,
    ExpenseManagementButtonsComponent,
    ExpenseTypeComponent,
    TabViewModule,
    TabMenuModule,
    AvatarModule
  ]
})
export class SharedModule { }
