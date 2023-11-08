import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Datos } from '../datos';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="datos.photo" alt="Exterior photo of {{datos.name}}">
    <h2 class="listing-heading">{{ datos.name }}</h2>
    <p class="listing-location">{{ datos.city}}, {{datos.state }}</p>
    <a [routerLink]="['/details', datos.id]">Learn More</a>
  </section>
`,
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  @Input() datos!: Datos;

}
