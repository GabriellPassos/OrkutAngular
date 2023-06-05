import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSocialComponent } from './perfil-social.component';

describe('PerfilSocialComponent', () => {
  let component: PerfilSocialComponent;
  let fixture: ComponentFixture<PerfilSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
