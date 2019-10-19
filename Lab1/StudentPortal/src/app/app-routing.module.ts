import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component';
import {HeaderComponent} from './header/header.component';
import {CalendarComponent} from './calendar/calendar.component';
import {CoursesComponent} from './courses/courses.component';
import {StudentProfileComponent} from './student-profile/student-profile.component';
import {VideoLessonsComponent} from './video-lessons/video-lessons.component';


export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'profile',
    component: StudentProfileComponent
  },
  {
    path: 'videoLessons',
    component: VideoLessonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
