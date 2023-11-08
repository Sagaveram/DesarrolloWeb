import { Component, inject } from '@angular/core';
import { Tarjeta } from '../tarjeta';
import { ManejadorService } from '../manejador.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  tarjetaList: Tarjeta[] = [];
manejadorService: ManejadorService = inject(ManejadorService);
filtradoList: Tarjeta[] = [];

constructor() {
  this.tarjetaList = this.manejadorService.getDatos();
  this.filtradoList = this.tarjetaList;

}

}
