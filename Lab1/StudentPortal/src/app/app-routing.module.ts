import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component';
import {HeaderComponent} from './header/header.component';
import {CalendarComponent} from './calendar/calendar.component';
import {CoursesComponent} from './courses/courses.component';
import {StudentProfileComponent} from './student-profile/student-profile.component';


export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent
  },
  {
    path: 'login',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
