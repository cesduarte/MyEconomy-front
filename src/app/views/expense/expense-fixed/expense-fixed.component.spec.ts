import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseFixedComponent } from './expense-fixed.component';

describe('ExpenseFixedComponent', () => {
  let component: ExpenseFixedComponent;
  let fixture: ComponentFixture<ExpenseFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
