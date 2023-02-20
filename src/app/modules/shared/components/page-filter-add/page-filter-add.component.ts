import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-filter-add',
  templateUrl: './page-filter-add.component.html',
  styleUrls: ['./page-filter-add.component.scss']
})
export class PageFilterAddComponent{

  @Output() openDialogEmiter = new EventEmitter();
  @Output() openDialogSearchEmiter = new EventEmitter();
  @Output() applyFilterEmiter = new EventEmitter();

  @Input() displayFilter!: boolean
  filter!: string;

  openDialog() {
    this.openDialogEmiter.emit();
  }
  openDialogSearch(){
    this.openDialogSearchEmiter.emit();
  }
  applyFilter(){
    this.applyFilterEmiter.emit(this.filter);
  }
}
