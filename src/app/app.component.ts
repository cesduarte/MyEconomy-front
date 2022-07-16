import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyEconomy-front-app';
  sidenavWidth = 13;
  opened = true;

  public theme = 'wrapper theme_default'

  changeWidth(){
    this.opened = !this.opened
  }
  getStatus(){
    return this.opened;
  }
}
