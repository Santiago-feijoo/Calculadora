import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  pantalla:number = 0;
  resultado:string = "";
  auxiliar:number=0;
  constructor() { }

  onSuprimir(): void{
    this.resultado =this.resultado.substring(0, this.resultado.length - 1)
  }

  onLimpiar(): void {
    this.auxiliar = 0;
    this.resultado = ""

  }

  onValor(numero:number): void {
    if (this.resultado = ""){
      this.resultado=String(numero)

    }
    else{
      this.resultado = this.resultado + numero

    }

  }

  onSumar(): void {
      this.resultado =String(parseInt (this.resultado) + this.auxiliar)
      this.auxiliar = parseInt(this.resultado)
  }
  onRestar(): void {
    this.resultado =String(parseInt (this.resultado) - this.auxiliar)
    this.auxiliar = parseInt(this.resultado)
}
onDividir(): void {
  this.resultado =String(parseInt (this.resultado) / this.auxiliar)
  this.auxiliar = parseInt(this.resultado)
}
onMultiplicar(): void {
  this.resultado =String(parseInt (this.resultado) * this.auxiliar)
  this.auxiliar = parseInt(this.resultado)
}


  ngOnInit(): void {

  }



}
