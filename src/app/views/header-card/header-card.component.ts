import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.css']
})
export class HeaderCardComponent {

  @Input() titulo!: string;
  
  @Output() openDialogEmiter = new EventEmitter();
  @Output() openDialogSearchEmiter = new EventEmitter();

  constructor() { }  

  openDialog() {
    this.openDialogEmiter.emit();
  }
  openDialogSearch(){
    this.openDialogSearchEmiter.emit();
  }

}
