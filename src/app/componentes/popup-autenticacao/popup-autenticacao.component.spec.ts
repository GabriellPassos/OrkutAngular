import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAutenticacaoComponent } from './popup-autenticacao.component';

describe('PopupAutenticacaoComponent', () => {
  let component: PopupAutenticacaoComponent;
  let fixture: ComponentFixture<PopupAutenticacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAutenticacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAutenticacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
