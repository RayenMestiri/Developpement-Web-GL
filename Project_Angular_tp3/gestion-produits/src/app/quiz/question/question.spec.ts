import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question } from './question';

describe('Question', () => {
  let component: Question;
  let fixture: ComponentFixture<Question>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Question]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
