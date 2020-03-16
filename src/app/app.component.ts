import { Component } from '@angular/core';
import {Suma} from '../suma.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  suma:Suma;
  name = 'Angular';

  onSumar(suma:Suma){
    this.suma=suma;
  }
}
