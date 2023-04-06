import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseControlListComponent } from './expense-control-list.component';

describe('ExpenseControlListComponent', () => {
  let component: ExpenseControlListComponent;
  let fixture: ComponentFixture<ExpenseControlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseControlListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseControlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
