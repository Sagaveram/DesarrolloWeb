import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Juegos } from './juegos';

@Injectable({
  providedIn: 'root'
})
export class ManejadorService {

  constructor(private httpClient:HttpClient) { }
  private juegosURL = 'https://api.rawg.io/api/games?key=14cea60ef58c4b298d71a100f7ddd256';  // URL to web api
  
  getJuegos(): Observable<Juegos> {
    return this.httpClient.get<Juegos>(this.juegosURL)    
  }
}
