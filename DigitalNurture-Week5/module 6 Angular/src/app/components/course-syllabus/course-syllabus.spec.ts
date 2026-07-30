import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSyllabus } from './course-syllabus';

describe('CourseSyllabus', () => {
  let component: CourseSyllabus;
  let fixture: ComponentFixture<CourseSyllabus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSyllabus],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseSyllabus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
