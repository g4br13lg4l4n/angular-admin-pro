import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  label1 = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  data1 = [
    { data: [350, 450, 100] },
    { data: [50, 150, 120] },
    { data: [250, 130, 70] }
  ]

  data2 = [
    { data: [ 350, 450, 100 ] },
    { data: [ 50, 150, 120 ] },
    { data: [ 250, 130, 70 ] }
  ]

  

}
