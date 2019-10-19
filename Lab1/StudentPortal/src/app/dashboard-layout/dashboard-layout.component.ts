import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceService} from '../services/course-service.service';
import {LoginServiceService} from '../services/login-service.service';
import {CalendarServiceService} from '../services/calendar-service.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {
  registeredCourse;
  events;
  constructor(private route: ActivatedRoute, private courseApi: CourseServiceService, private router: Router,
              private loginS: LoginServiceService, private calendarService: CalendarServiceService) { }

  ngOnInit() {
    // function to get the courses registered by the user
    this.courseApi.getRegisteredCourse(localStorage.getItem('LoggedinEmailId')).subscribe(res => {
      // console.log(res);
      this.registeredCourse = res;
    }, err => {
      console.log(err);
    });
    // function to get all the events added by user
    this.calendarService.getEvent(localStorage.getItem('LoggedinEmailId')).subscribe(res => {
      // console.log(res);
      this.events = res;
    }, err => {
      console.log(err);
    });
  }

}
