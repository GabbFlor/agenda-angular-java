import { TestBed } from '@angular/core/testing';

import { AtualizarContatosService } from './atualizar-contatos.service';

describe('AtualizarContatosService', () => {
  let service: AtualizarContatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtualizarContatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
