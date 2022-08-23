import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBreadcrumbItem } from 'src/app/core/interfaces/breadcrumb-item';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent{

  @Input() titulo!: string;
  
  @Output() openDialogEmiter = new EventEmitter();
  @Output() openDialogSearchEmiter = new EventEmitter();
  @Input() breadcrumbItems: IBreadcrumbItem[] = [];

  constructor() { }  

  openDialog() {
    this.openDialogEmiter.emit();
  }
  openDialogSearch(){
    this.openDialogSearchEmiter.emit();
  }

}
