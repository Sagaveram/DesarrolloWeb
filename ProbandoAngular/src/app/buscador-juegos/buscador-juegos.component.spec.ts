import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorJuegosComponent } from './buscador-juegos.component';

describe('BuscadorJuegosComponent', () => {
  let component: BuscadorJuegosComponent;
  let fixture: ComponentFixture<BuscadorJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadorJuegosComponent]
    });
    fixture = TestBed.createComponent(BuscadorJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
