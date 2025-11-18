import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantForm } from './etudiant-form';

describe('EtudiantForm', () => {
  let component: EtudiantForm;
  let fixture: ComponentFixture<EtudiantForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
