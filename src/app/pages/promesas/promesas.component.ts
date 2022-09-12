import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then((usuarios: any) => {
      console.log('usuarios --->', usuarios);
    });

    

    const promesa = new Promise((resolve) => {
      resolve('resuelve');
      // reject('') error
    });

    promesa
      .then((msg) => {
        console.log(msg);
      })
      .catch(err => console.log(err));
  }

  getUsuarios(): any {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then(response =>response.json())
      .then(body => resolve(body.data))
    });

  }


}
