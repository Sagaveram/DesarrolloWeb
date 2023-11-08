import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManejadorService } from '../manejador.service';
import { Datos } from '../datos';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <article>
    <img class="listing-photo" [src]="datos?.photo"
      alt="Exterior photo of {{datos?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{datos?.name}}</h2>
      <p class="listing-location">{{datos?.city}}, {{datos?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{datos?.availableUnits}}</li>
        <li>Does this location have wifi: {{datos?.wifi}}</li>
        <li>Does this location have laundry: {{datos?.laundry}}</li>
      </ul>
    </section>
  </article>
`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
    manejadorService = inject(ManejadorService);
    datos: Datos | undefined;
  
    constructor() {
      const Identificador = Number(this.route.snapshot.params['id']);
      this.datos = this.manejadorService.getDatosById(Identificador);
    }

}
