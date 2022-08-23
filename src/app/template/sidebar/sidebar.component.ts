import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/core/interfaces/menu-item';
import { MENU_ITEMS } from 'src/app/modules/shared/config/menu';
import { ToogleService } from 'src/app/services/toogle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: IMenuItem[] = [];

  constructor(private toogleService: ToogleService) { }

  ngOnInit() {
    this.menuItems = MENU_ITEMS;
  }
  getvisibleMenu(){
    return this.toogleService.getvisibleMenu();
  }

}
