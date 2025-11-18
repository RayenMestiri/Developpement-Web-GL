import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produits } from './produits';

describe('Produits', () => {
  let component: Produits;
  let fixture: ComponentFixture<Produits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Produits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Produits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
