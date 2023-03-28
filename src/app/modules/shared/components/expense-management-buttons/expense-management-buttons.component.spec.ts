import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseManagementButtonsComponent } from './expense-management-buttons.component';

describe('ExpenseManagementButtonsComponent', () => {
  let component: ExpenseManagementButtonsComponent;
  let fixture: ComponentFixture<ExpenseManagementButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseManagementButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseManagementButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
