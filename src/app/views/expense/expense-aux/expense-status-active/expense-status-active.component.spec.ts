import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseStatusActiveComponent } from './expense-status-active.component';

describe('ExpenseStatusActiveComponent', () => {
  let component: ExpenseStatusActiveComponent;
  let fixture: ComponentFixture<ExpenseStatusActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseStatusActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseStatusActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
