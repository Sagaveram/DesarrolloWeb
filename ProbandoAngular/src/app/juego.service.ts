import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  
  constructor(
    private http: HttpClient) { 
      
    }
    
    

    private juegosURL = 'https://api.rawg.io/api/games?key=14cea60ef58c4b298d71a100f7ddd256';  // URL to web api

    public listaJuegos: any[] = [];

  /** GET heroes from the server */
  /** GET heroes from the server */
/*getJuegos(): Observable<any> {
  return this.http.get<any>(this.juegosURL)
    
}*/

public lista:any[]=[];

getJuegos(): Observable<any> { // Cambio aquí
  return this.http.get<any>(this.juegosURL).pipe(
    catchError(this.handleError<any>('getJuegos', []))
  );
}

searchJuegos(term: string): Observable<any[]> {
  if (!term.trim()) {
    return of([]);
  }

  return this.getJuegos().pipe(
    map((data) => {
      const juegos: any[] = data?.results || []; // Mantén esta línea igual
      return juegos.filter((juego: any) =>
        juego.name.toLowerCase().includes(term.toLowerCase())
      );
    }),
    catchError(this.handleError<any[]>('searchJuegos', []))
  );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
  };
}

public filtradoJuego(texto:String){
  this.lista = this.listaJuegos.filter(juego=>juego.results[0].name===texto)
  return this.lista;

}





}
