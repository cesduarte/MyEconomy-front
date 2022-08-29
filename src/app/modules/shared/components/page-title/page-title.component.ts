import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBreadcrumbItem } from 'src/app/core/interfaces/breadcrumb-item';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent{

  @Input() titulo!: string; 
  
  @Input() breadcrumbItems: IBreadcrumbItem[] = [];

  constructor() { }

  

}
