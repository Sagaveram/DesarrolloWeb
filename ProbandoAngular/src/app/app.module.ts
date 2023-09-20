import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoService } from './juego.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaJuegosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      
    
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
