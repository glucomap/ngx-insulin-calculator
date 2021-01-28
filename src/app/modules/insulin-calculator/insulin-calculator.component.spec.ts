import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsulinCalculatorComponent } from './insulin-calculator.component';

describe('InsulinCalculatorComponent', () => {
  let component: InsulinCalculatorComponent;
  let fixture: ComponentFixture<InsulinCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsulinCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsulinCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
