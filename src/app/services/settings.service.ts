import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');
  constructor() {
    const theme = localStorage.getItem('theme') || './assets/css/colors/megna-dark.css';
    this.linkTheme?.setAttribute('href', theme);
   }

   changeTheme(theme: string): void {
    const url = `./assets/css/colors/${ theme }.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    const links = document.querySelectorAll('.selector');

    links.forEach(el => {
      el.classList.remove('working');
      const btnTheme = el.getAttribute('data-theme');
      const btnUrl = `./assets/css/colors/${ btnTheme }.css`;
      const linkTheme = this.linkTheme?.getAttribute('href');
      if (btnUrl === linkTheme) {
        el.classList.add('working');
      }
    });
  }

}
