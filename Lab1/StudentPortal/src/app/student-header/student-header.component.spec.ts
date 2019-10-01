import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHeaderComponent } from './student-header.component';

describe('StudentHeaderComponent', () => {
  let component: StudentHeaderComponent;
  let fixture: ComponentFixture<StudentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
