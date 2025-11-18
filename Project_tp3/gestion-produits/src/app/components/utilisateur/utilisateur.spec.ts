import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Utilisateur } from './utilisateur';

describe('Utilisateur', () => {
  let component: Utilisateur;
  let fixture: ComponentFixture<Utilisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Utilisateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Utilisateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
