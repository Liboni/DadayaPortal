import { Injectable } from '@angular/core';
import { Permission } from '../enums/permission.enum';

@Injectable()
export class MenuItemsService {

  constructor() { }

  public static menuitems: Array<MenuItemsService> =
    [
      {
        name: null,
        items: [
          { name: 'Dashboard', icon: 'ion-ios-pulse', router: '/dashboard', permission: Permission.None }
        ]
      },
      {
        name: 'User Management',
        items: [
          { name: 'Staff', icon: 'ion-ios-cog-outline', router: '/teachers', permission: Permission.None },
          { name: 'Permissions', icon: 'ion-ios-people-outline', router: '/students', permission: Permission.None }
        ]
      },

      {
        name: 'News Management',
        items: [
          { name: 'Events', icon: 'ion-ios-download-outline', router: '/claims', permission: Permission.None },
          { name: 'Notices', icon: 'ion-ios-download-outline', router: '/claims', permission: Permission.None }
        ]
      }
    ];
  public static load(): Array<MenuItemsService> {
    return this.menuitems;
  }
}
