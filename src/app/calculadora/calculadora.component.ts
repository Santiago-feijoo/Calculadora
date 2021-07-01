import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  pantalla:number = 0;
  resultado:string = "";
  constructor() { }

  onSuprimir(): void {
    this.resultado = this.resultado.substring(0, this.resultado.length - 1)

  }

  onLimpiar(): void {
    this.resultado = ""

  }

  onValor(numero:number): void {
    this.resultado = this.resultado + numero

  }

  onSumar(): void {
      this.resultado = this.resultado + this.pantalla

  }

  ngOnInit(): void {

  }

}
