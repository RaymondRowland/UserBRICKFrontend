import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public monto : number;
  public tasa : number;
  public tiempo: number;
  public result : string;
  public numerador: number;
  public denominador: number;
  public tasa2: number;
  public tiempo2: number;
  public moneda: string;
  

  

   

  public add(){
    this.tiempo2 = this.tiempo * 12;
    this.tasa2 = (this.tasa / 12) / 100
    this.numerador = (Math.pow(1 + this.tasa2, this.tiempo2)) * this.tasa2 
    this.denominador = (Math.pow(1 + this.tasa2, this.tiempo2)) - 1
    if (this.moneda=="DOP") {  
    this.result = Math.round((this.numerador/ this.denominador) * this.monto) + '$RD' ;
    }
    else{
      this.result = Math.round((this.numerador/ this.denominador) * this.monto) + '$US' ;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
