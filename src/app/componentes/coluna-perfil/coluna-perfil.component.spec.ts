import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaPerfilComponent } from './coluna-perfil.component';

describe('ColunaPerfilComponent', () => {
  let component: ColunaPerfilComponent;
  let fixture: ComponentFixture<ColunaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColunaPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColunaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
