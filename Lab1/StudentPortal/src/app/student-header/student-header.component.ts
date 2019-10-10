import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceService} from '../services/course-service.service';
import {LoginServiceService} from '../services/login-service.service';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent implements OnInit {

  constructor(private course: CourseServiceService, private loginService: LoginServiceService, private router: Router) { }
  dynamic = 0;
  max = 10;
  loggedIn;
  ngOnInit() {
    // get the registered courses and display the count on progress bar
    this.course.getRegisteredCourse(localStorage.getItem('LoggedinEmailId')).subscribe(res => {
      this.dynamic = res.length;
    }, err => {
      console.log(err);
    });
    this.loggedIn = localStorage.getItem('LoggedinEmailId');
  }
  // function to log out from the system
  logOut() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }

}
