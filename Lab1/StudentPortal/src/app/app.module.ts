import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { HeaderComponent } from './header/header.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { VideoLessonsComponent } from './video-lessons/video-lessons.component';
// import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SideBarComponent,
    DashboardLayoutComponent,
    CalendarComponent,
    CoursesComponent,
    StudentProfileComponent,
    HeaderComponent,
    StudentHeaderComponent,
    VideoLessonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ProgressbarModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModalModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
