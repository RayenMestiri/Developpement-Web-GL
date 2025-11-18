import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taches } from './taches';

describe('Taches', () => {
  let component: Taches;
  let fixture: ComponentFixture<Taches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Taches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
