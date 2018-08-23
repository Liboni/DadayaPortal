import { Component } from '@angular/core';
import { MenuItemsService } from './services/menu-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username: string;
  menuItems: Array<any>;

  constructor() {
    this.menuItems = MenuItemsService.load();    
  }

  getUsername(): string {   
    return 'Liboni';
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
