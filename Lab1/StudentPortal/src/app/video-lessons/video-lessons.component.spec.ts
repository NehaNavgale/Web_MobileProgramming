import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLessonsComponent } from './video-lessons.component';

describe('VideoLessonsComponent', () => {
  let component: VideoLessonsComponent;
  let fixture: ComponentFixture<VideoLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
