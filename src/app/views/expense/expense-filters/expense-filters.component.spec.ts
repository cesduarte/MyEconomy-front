import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseFiltersComponent } from './expense-filters.component';

describe('ExpenseFiltersComponent', () => {
  let component: ExpenseFiltersComponent;
  let fixture: ComponentFixture<ExpenseFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
