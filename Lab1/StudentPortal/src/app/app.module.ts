import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { HeaderComponent } from './header/header.component';
import { StudentHeaderComponent } from './student-header/student-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SideBarComponent,
    DashboardLayoutComponent,
    CalendarComponent,
    CoursesComponent,
    StudentProfileComponent,
    HeaderComponent,
    StudentHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
