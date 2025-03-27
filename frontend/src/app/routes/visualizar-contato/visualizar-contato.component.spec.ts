import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarContatoComponent } from './visualizar-contato.component';

describe('VisualizarContatoComponent', () => {
  let component: VisualizarContatoComponent;
  let fixture: ComponentFixture<VisualizarContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarContatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
