import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {
  public numero!: number;
  public numeros: Array <number>

  constructor() {
    this.numero = 0
    this.numeros = [1,2,3,4,5,6,7,8,9,19]
  }
}
