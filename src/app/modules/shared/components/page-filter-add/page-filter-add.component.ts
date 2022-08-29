import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-filter-add',
  templateUrl: './page-filter-add.component.html',
  styleUrls: ['./page-filter-add.component.scss']
})
export class PageFilterAddComponent{

  @Output() openDialogEmiter = new EventEmitter();
  @Output() openDialogSearchEmiter = new EventEmitter();
  @Input() displayFilter!: boolean; 
 
  openDialog() {
    this.openDialogEmiter.emit();
  }
  openDialogSearch(){
    this.openDialogSearchEmiter.emit();
  }
}
