import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isMenuOpen = false; // Inicialmente, el menú está cerrado

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Cambiar el estado del menú (abierto/cerrado)
  }

}
