import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseFixedListComponent } from './expense-fixed-list.component';

describe('ExpenseFixedListComponent', () => {
  let component: ExpenseFixedListComponent;
  let fixture: ComponentFixture<ExpenseFixedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseFixedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseFixedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
