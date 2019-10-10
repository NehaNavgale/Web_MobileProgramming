import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceService} from '../services/course-service.service';
import {LoginServiceService} from '../services/login-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses;
  registeredCourse;
  public selectedCourse = 'select';
  public term = 'Fall 2019';
  constructor(private route: ActivatedRoute, private courseApi: CourseServiceService, private router: Router,
              private loginS: LoginServiceService) {
  }

  ngOnInit() {
    this.courses = this.courseApi.allCourse;
    console.log(this.courses);
    // function to get all the courses and append that to dropdown
    this.courseApi.getAllCourses().subscribe(res => {
      this.courses = res;
    }, err => {
      console.log(err);
    });
    // function to get the courses registered by the logged in student
    this.courseApi.getRegisteredCourse(localStorage.getItem('LoggedinEmailId')).subscribe(res => {
      this.registeredCourse = res;
    }, err => {
      console.log(err);
    });
  }
  // function to add the course
  addCourse() {
    const rCourse = this.courses.find(i => i.className === this.selectedCourse);
    const courseDetails = {
      emailAddress: this.loginS.getUsers(),
      className: this.selectedCourse,
      term: this.term,
      days_Times: rCourse.days_Times,
      instructor: rCourse.instructor,
      room: rCourse.room,
      credit: rCourse.credit
    };
    this.registeredCourse.push(courseDetails);
    this.courseApi.postRegisteredCourse(courseDetails).subscribe(data => {
      console.log('After Backend call', + data);
    });
  }
}
