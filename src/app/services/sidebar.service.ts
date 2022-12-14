import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard!!',
      icono: 'mdi mdi-gauge',
      subMenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'ProgressBae', url: 'progress' },
        { titulo: 'Gráficas', url: 'grafica1' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'Rxjs', url: 'rxjs' }
      ]
    }
  ];

  constructor() { }
}
