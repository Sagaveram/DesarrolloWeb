import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(
    private http: HttpClient) { }

    private juegosURL = 'https://api.rawg.io/api/games?key=14cea60ef58c4b298d71a100f7ddd256';  // URL to web api

  

  /** GET heroes from the server */
  /** GET heroes from the server */
getJuegos(): Observable<any> {
  return this.http.get<any>(this.juegosURL)
    
}

}
