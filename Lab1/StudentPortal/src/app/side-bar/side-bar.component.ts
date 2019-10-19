import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceService} from '../services/course-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  selectedItemId;
  item;
  dynamic = 6;
  max = 10;
  loggedIn;
  constructor(private course: CourseServiceService) { }
  ngOnInit() {
    // this.course.getRegisteredCourse(localStorage.getItem('LoggedinEmailId')).subscribe(res => {
    //   this.dynamic = res.length;
    // }, err => {
    //   console.log(err);
    // });
    this.loggedIn = localStorage.getItem('LoggedinEmailId');
  }
}
