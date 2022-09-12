import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {
  titulo: string = '';
  public tituloSubs$: Subscription;
  constructor(
    private router: Router
  ) { 
    this.tituloSubs$ = this.getDataRuta().subscribe( ( data: any ) => {
      this.titulo = data.titulo;
      document.title = data.titulo;
    });
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getDataRuta():any {
    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: any) => event?.snapshot?.firstChild === null  ),
      map( (event: any) => event?.snapshot?.data )
    )
  }

}
