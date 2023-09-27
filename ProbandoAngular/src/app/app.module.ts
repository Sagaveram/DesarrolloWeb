import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoService } from './juego.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from  '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';












@NgModule({
  declarations: [
    AppComponent,
    ListaJuegosComponent,
    HeaderComponent,
    SearchbarComponent,
    FooterComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    NgIf,
    MatSidenavModule, 
    
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private JuegoService: JuegoService){}

  juegos: any = [];
  getJuegos(): void {
    this.JuegoService.getJuegos()
    .subscribe(juegos => this.juegos = juegos);
  }

  
}
