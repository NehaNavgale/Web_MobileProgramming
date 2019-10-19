import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../services/login-service.service';
import {CourseServiceService} from '../services/course-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailID: String = '';
  password: String = '';
  InvalidUser: Boolean = false;
  constructor(private loginService: LoginServiceService, private router: Router, private courseService: CourseServiceService) { }

  ngOnInit() {
  }
  // function to check if the logged in user is authentic or not.
  userLogin() {
    const student = {
      emailID: this.emailID,
      password: this.password
    };
    this.loginService.authenticate(student).subscribe((data) => {
      /*Receives success message if user exists and with correct credentails*/
      // @ts-ignore
      if (data.message === 'Success') {
        this.router.navigate(['./dashboard']);
        // @ts-ignore
        console.log(data.message);
        this.loginService.setUsers(data);
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });
  }

}
