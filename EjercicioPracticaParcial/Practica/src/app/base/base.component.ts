import { Component, inject } from '@angular/core';
import { Datos } from '../datos';
import { ManejadorService } from '../manejador.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
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
      datos => datos?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

}
