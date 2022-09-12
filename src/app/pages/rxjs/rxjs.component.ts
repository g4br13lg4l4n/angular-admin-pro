import { Component, OnInit } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  public intervalSubs: Subscription;

  constructor() {
    
    /*
    this.retornaObservable()
    .pipe(
      retry(2) // reintenta 2 veces mas 
    ) // forma de transformar la info o reintantar tambien
    .subscribe({
        next: (v) => console.log('valor', v),
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
    });
    */

    this.intervalSubs = this.retornaIntervalo()
      .subscribe( console.log );

      /**
       * this.retornaIntervalo()
         .subscribe( console.log ) // es igual que tener
       this.retornaIntervalo()
         .subscribe(
          (valor) => console.log(valor)
        )
       */
   }

   ngOnDestroy() {
    this.intervalSubs.unsubscribe();
   }



   retornaIntervalo(): Observable<number> {
    return interval(500)
    .pipe(
      // take(10),
      map(valor => valor + 1),
      filter(valor => (valor % 2 === 0)),
    );
   }
  
   /*
   retornaIntervalo(): Observable<number> {
    return interval(1000)
    .pipe(
      take(4), // cuantas emisiones del observable necesita emitir
      map(valor => valor + 1) // map tranforma la información
    );
   }
   */

   retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>( observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if(i === 2) {
          console.log('i = 2 error')
          observer.error('i llegó a 2');
        }
      }, 1000);
    });
   }

  ngOnInit(): void {
  }

}
