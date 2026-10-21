import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component-v2',
  standalone: false,
  styleUrl: './tabla-multiplicar-component-v2.css',
  templateUrl: './tabla-multiplicar-component-v2.html',
})
export class TablaMultiplicarComponentV2 {  
  public numeros: Array<number>
  public numero: number
  @ViewChild("cajanumero") cajaNumero!: ElementRef

  constructor() {
    this.numeros = [1,2,3,4,5,6,7,8,9,10]
    this.numero = 0
  }

  multiplicarNumeros(): void{
    this.numero = parseInt(this.cajaNumero.nativeElement.value)
  }
}
