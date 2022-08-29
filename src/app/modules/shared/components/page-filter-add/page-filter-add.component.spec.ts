import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilterAddComponent } from './page-filter-add.component';

describe('PageFilterAddComponent', () => {
  let component: PageFilterAddComponent;
  let fixture: ComponentFixture<PageFilterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFilterAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFilterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
