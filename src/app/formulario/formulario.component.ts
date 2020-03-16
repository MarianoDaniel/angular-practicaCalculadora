import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Suma} from '../suma.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
operador1:number;
operador2:number;
@Output()resultado= new EventEmitter<Suma>();

  constructor() { }

  ngOnInit() {
  }
sumar(){
 let suma= new Suma(this.operador1,this.operador2);
 this.resultado.emit(suma);
}
}