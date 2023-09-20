import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css'],
})
export class ListaJuegosComponent implements OnInit {
  constructor(private juegoService: JuegoService) {}
  juegos: any;
  ngOnInit(): void {
    this.getJuegos();
  }

  getJuegos(): void {
    this.juegoService
      .getJuegos()
      .subscribe((juegos) => (this.juegos = [...juegos.results]));
    console.log(this.juegos);
  }
}
