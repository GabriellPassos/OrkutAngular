import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMensagemComponent } from './form-mensagem.component';

describe('FormMensagemComponent', () => {
  let component: FormMensagemComponent;
  let fixture: ComponentFixture<FormMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMensagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
