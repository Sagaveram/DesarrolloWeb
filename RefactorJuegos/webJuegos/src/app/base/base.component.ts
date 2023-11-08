import { Component, inject } from '@angular/core';
import { Juegos } from '../juegos';
import { ManejadorService } from '../manejador.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  listaJuegos: Juegos[] = [];
  manejadorService: ManejadorService = inject(ManejadorService);
  filteredLocationList: Juegos[] = [];
  
  constructor() {
    this.listaJuegos = this.manejadorService.getJuegos();
    this.filteredLocationList = this.housingLocationList;
  
  }

}
