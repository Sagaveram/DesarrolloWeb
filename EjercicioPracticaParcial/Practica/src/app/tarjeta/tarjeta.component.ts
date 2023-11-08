import { Component, Input } from '@angular/core';
import { Datos } from '../datos';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() datos!: Datos;
}
