import { Component, OnInit } from '@angular/core';
import { ToogleService } from 'src/app/services/toogle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private toogleService: ToogleService) { }

  ngOnInit() {
  }
  getvisibleMenu(){
    return this.toogleService.getvisibleMenu();
  }

}
