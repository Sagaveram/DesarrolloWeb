import { Component, OnInit } from '@angular/core';

import { Observable, Subject, forkJoin, of } from 'rxjs';

import {
  combineLatest,
   debounceTime, distinctUntilChanged, map, startWith, switchMap
 } from 'rxjs/operators';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-buscador-juegos',
  templateUrl: './buscador-juegos.component.html',
  styleUrls: ['./buscador-juegos.component.css']
})
export class BuscadorJuegosComponent implements OnInit{
  juegos$!: Observable<any>;
  

  private searchTerms = new Subject<string>();
  constructor(private juegoService:JuegoService){}
 

 search(term: string): void {
  this.searchTerms.next(term);
}

ngOnInit(): void {
}








}
