import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDetailTableComponent } from './expense-detail-table.component';

describe('ExpenseDetailTableComponent', () => {
  let component: ExpenseDetailTableComponent;
  let fixture: ComponentFixture<ExpenseDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseDetailTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
