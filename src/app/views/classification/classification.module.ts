import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ClassificationComponent } from './classification.component';
import { ClassificationDetailComponent } from './classification-detail/classification-detail.component';
import { ClassificationListComponent } from './classification-list/classification-list.component';
import { ClassificationRoutingModule } from './classification-routing.module';



@NgModule({
  declarations: [
    ClassificationComponent,
    ClassificationDetailComponent,
    ClassificationListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClassificationRoutingModule,
  ],
  exports:[
    ClassificationListComponent,
  ]
})
export class ClassificationModule { }
