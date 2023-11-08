import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Datos } from '../datos';
import { ManejadorService } from '../manejador.service';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';

@Component({
  selector: 'app-base',
  standalone:true,
  imports:[CommonModule, TarjetaComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-tarjeta
      *ngFor="let tarjeta of listaFiltrada"
      [datos]="tarjeta">
    </app-tarjeta>
  </section>
`,
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  listaDatos: Datos[] = [];
  manejadorService: ManejadorService = inject(ManejadorService);
  listaFiltrada:Datos[]=[];

  constructor() {
    this.listaDatos = this.manejadorService.getDatos();
    this.listaFiltrada=this.listaDatos;
  }

  filterResults(text: string) {
    if (!text) {
      this.listaFiltrada = this.listaDatos;
    }
  
    this.listaFiltrada = this.listaDatos.filter(
      datos => datos?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
