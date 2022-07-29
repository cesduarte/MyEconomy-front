import { Component, OnInit } from '@angular/core';
import { ToogleService } from 'src/app/services/toogle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private toogleService: ToogleService) { }

  ngOnInit() {
  }
  alterVisibleMenu(){
    this.toogleService.alterVisibleMenu();
  }

}
