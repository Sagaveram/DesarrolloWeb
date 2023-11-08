import { AfterViewInit, Component ,ElementRef,ViewChild} from '@angular/core';
import { JuegoService } from '../juego.service'; // Asegúrate de importar el servicio adecuadamente
import {debounceTime, distinctUntilChanged, fromEvent, map} from 'rxjs';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent  {
  @ViewChild('variableBusqueda')
  variableBusqueda ?: ElementRef
  constructor(private juegoService:JuegoService) {}

  public filterResults(texto:String){

  }
  
 
  }
  
 





