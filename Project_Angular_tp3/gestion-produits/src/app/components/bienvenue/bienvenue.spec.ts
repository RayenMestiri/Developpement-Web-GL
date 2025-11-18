import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bienvenue } from './bienvenue';

describe('Bienvenue', () => {
  let component: Bienvenue;
  let fixture: ComponentFixture<Bienvenue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bienvenue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bienvenue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
