import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { RegisterServiceService} from '../services/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;
  constructor(private router: Router, private registerService: RegisterServiceService) { }
  // function to register user to site by saving his details to mongoDB
  registerUser(event) {
    const studentDetail = {
      firstName: event.firstname,
      lastName: event.lastname,
      emailAddress: event.email,
      studentID: event.studentId,
      password: event.password,
      confirmPassword: event.cpassword
    };
    this.registerService.registerStudent(studentDetail)
      .subscribe(res => {
        this.router.navigateByUrl('/');
      }, (err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }
}
