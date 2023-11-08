import { TestBed } from '@angular/core/testing';

import { ManejadorService } from './manejador.service';

describe('ManejadorService', () => {
  let service: ManejadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
