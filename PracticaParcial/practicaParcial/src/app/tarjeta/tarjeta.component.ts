import { Component, Input } from '@angular/core';
import { Tarjeta } from '../tarjeta';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() tarjeta!:Tarjeta;

}
