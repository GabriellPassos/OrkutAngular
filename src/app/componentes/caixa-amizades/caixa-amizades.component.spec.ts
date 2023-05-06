import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaAmizadesComponent } from './caixa-amizades.component';

describe('CaixaAmizadesComponent', () => {
  let component: CaixaAmizadesComponent;
  let fixture: ComponentFixture<CaixaAmizadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaAmizadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixaAmizadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
