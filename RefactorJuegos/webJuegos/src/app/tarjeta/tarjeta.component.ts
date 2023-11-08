import { Component, Input } from '@angular/core';
import { Juegos } from '../juegos';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() juegos!: Juegos;


}
