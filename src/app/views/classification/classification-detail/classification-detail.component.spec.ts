import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationDetailComponent } from './classification-detail.component';

describe('ClassificationDetailComponent', () => {
  let component: ClassificationDetailComponent;
  let fixture: ComponentFixture<ClassificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
