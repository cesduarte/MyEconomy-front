import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.css']
})
export class HeaderCardComponent {

  @Input() titulo!: string;
  @Input() detalhetela!: string;
  @Input() isDetalhe!: boolean

  constructor(private router: Router) { }

  detalhe(){
    this.router.navigateByUrl(this.detalhetela);
  }


}
