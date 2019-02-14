import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemsService } from './services/menu-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username: string;
  public menuItems: Array<any>;

  constructor(private router:Router) {
    if(localStorage.getItem("token")==null){
      this.router.navigate(['/login']);  
      return;
    }
    this.menuItems = MenuItemsService.load(); 
  }

  getUsername(): string {   
    return localStorage.getItem("username");
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
