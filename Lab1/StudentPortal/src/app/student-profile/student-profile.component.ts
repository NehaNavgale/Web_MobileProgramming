import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegisterServiceService} from '../services/register-service.service';
import {StudentProfileService} from '../services/student-profile.service';
import {LoginServiceService} from '../services/login-service.service';
import {Log} from '@angular/core/testing/src/logger';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  registerStudentDetail;
  loggedEmailID;
  studentDetails = {
    firstName: '',
    lastName: '',
    emailAddress: this.loggedEmailID,
    studentID: '',
    secondaryEmailAddress: '',
    primaryContactNumber: '',
    secondaryContactNumber: '',
    perStreet: '',
    perCity: '',
    perState: '',
    perPostalCode: '',
    emrName: '',
    emrRelation: '',
    emrAddress: '',
    emrContactNumber: '',
    tempStreet: '',
    tempCity: '',
    tempState: '',
    tempPostalCode: ''
  };
  constructor(private registerService: RegisterServiceService, private studentProfile: StudentProfileService,
              private loginSer: LoginServiceService, private router: Router) { }
  ngOnInit() {
    this.loggedEmailID = this.loginSer.getUsers();
    this.getStudentDetail();
  }
  // get student details and display it on UI by using two way binding
  getStudentDetail() {
    this.studentProfile.getStudentProfile(this.loggedEmailID).subscribe((data) => {
      if (data.length > 0) {
        console.log(data.message);
        this.registerStudentDetail = data[0];
        this.studentDetails = this.registerStudentDetail;
      } else {
        this.registerService.getStudentDetail(this.loggedEmailID).subscribe(res => {
          // console.log(res);
          this.registerStudentDetail = res[0];
          this.studentDetails = {
            firstName: this.registerStudentDetail.firstName,
            lastName: this.registerStudentDetail.lastName,
            emailAddress: localStorage.getItem('LoggedinEmailId'),
            studentID: this.registerStudentDetail.studentID,
            secondaryEmailAddress: '',
            primaryContactNumber: '',
            secondaryContactNumber: '',
            perStreet: '',
            perCity: '',
            perState: '',
            perPostalCode: '',
            emrName: '',
            emrRelation: '',
            emrAddress: '',
            emrContactNumber: '',
            tempStreet: '',
            tempCity: '',
            tempState: '',
            tempPostalCode: ''
          };
        }, err => {
          console.log(err);
        });
      }
    });
  }
  // function to update the details of student
  onFormSubmit(event) {
     this.studentDetails = {
      firstName: event.firstName,
      lastName: event.lastName,
      emailAddress: this.loggedEmailID,
      studentID: event.studentID,
      secondaryEmailAddress: event.secondaryEmail,
      primaryContactNumber: event.primaryContact,
      secondaryContactNumber: event.secondaryContact,
      perStreet: event.street,
      perCity: event.city,
      perState: event.state,
      perPostalCode: event.postal_code,
      emrName: event.eName,
      emrRelation: event.relation,
      emrAddress: event.eAddress,
      emrContactNumber: event.eContactNumber,
      tempStreet: event.tStreet,
      tempCity: event.tCity,
      tempState: event.tState,
      tempPostalCode: event.tPostal_code
    };
    console.log(this.studentDetails);
    this.studentProfile.getStudentProfile(this.loggedEmailID).subscribe((data) => {
      if (data.length > 0) {
        console.log(data.message);
        this.studentProfile.updateStudentProfile(this.loggedEmailID, this.studentDetails).subscribe((res) => {
          console.log(res.message);
        });
      } else {
        this.studentProfile.postStudentprofile(this.studentDetails).subscribe((res) => {
          console.log(res.message);
        });
      }
      this.router.navigateByUrl('/dashboard');
    });
  }

}
