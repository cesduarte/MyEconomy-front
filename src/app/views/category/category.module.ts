import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryDetailComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule
  ],
  exports:[
    CategoryListComponent
  ]
})
export class CategoryModule { }
