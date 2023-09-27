import { Component } from '@angular/core';
import { JuegoService } from '../juego.service'; // Asegúrate de importar el servicio adecuadamente


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private juegoService: JuegoService) {}

  onSearch() {
    this.searchGames(this.searchQuery);
  }

  private searchGames(query: string) {
    if (query.trim() === '') {
      this.searchResults = [];
      return;
    }

    this.juegoService.searchGames(query)
      .subscribe(
        (result) => {
          console.log('Resultados de la búsqueda:', result);
          this.searchResults = result.results;
        },
        (error) => {
          console.error('Error al realizar la búsqueda:', error);
        }
      );
  }


}
