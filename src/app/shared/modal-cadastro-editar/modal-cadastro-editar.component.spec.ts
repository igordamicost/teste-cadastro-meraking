import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastroEditarComponent } from './modal-cadastro-editar.component';

describe('ModalCadastroEditarComponent', () => {
  let component: ModalCadastroEditarComponent;
  let fixture: ComponentFixture<ModalCadastroEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCadastroEditarComponent]
    });
    fixture = TestBed.createComponent(ModalCadastroEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
