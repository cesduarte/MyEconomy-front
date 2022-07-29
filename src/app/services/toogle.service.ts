import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToogleService {

visibleMenu = false;
constructor() { }

alterVisibleMenu(){
  this.visibleMenu = !this.visibleMenu;
}
getvisibleMenu(){
  return this.visibleMenu;
}
}
