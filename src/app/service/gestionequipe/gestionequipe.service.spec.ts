import { TestBed } from '@angular/core/testing';

import { GestionEquipeService } from './gestionequipe.service';

describe('EvenementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionEquipeService = TestBed.get(GestionEquipeService);
    expect(service).toBeTruthy();
  });
});
