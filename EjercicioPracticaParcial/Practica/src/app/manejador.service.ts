import { Injectable } from '@angular/core';
import { Datos } from './datos';

@Injectable({
  providedIn: 'root'
})
export class ManejadorService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected datos: Datos[] = [
    {
      id: 0,
      name: 'Seriously Safe Towns',
      photo: "https://images.rappi.com.uy/products/a9a49262-5fd8-4658-a12d-294a2060e5f2.jpg?d=300x300&e=webp&q=10",
      datos:"hola" 
    },
    {
      id: 1,
      name: 'Seriously Safe Towns',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      datos:"hola" 
    },
    {
      id: 2,
      name: 'Seriously Safe Towns',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      datos:"hola" 
    },
    {
      id: 3,
      name: 'Seriously Safe Towns',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      datos:"hola" 
    },
    {
      id: 4,
      name: 'Seriously Safe Towns',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      datos:"hola" 
    },
    {
      id: 5,
      name: 'Seriously Safe Towns',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      datos:"hola" 
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      datos:"hola" 
    },
    
  ];

  getDatos(): Datos[] {
    return this.datos;
  }

  getDatosById(id: number): Datos | undefined {
    return this.datos.find(datos => datos.id === id);
  }
}
