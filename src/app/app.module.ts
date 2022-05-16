import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AdminSidenavComponent } from './components/admin/admin-layout/admin-sidenav/admin-sidenav.component';
import { AdminFooterComponent } from './components/admin/admin-layout/admin-footer/admin-footer.component';
import { AdminRightSidenavComponent } from './components/admin/admin-layout/admin-right-sidenav/admin-right-sidenav.component';
import { AdminNavbarComponent } from './components/admin/admin-layout/admin-navbar/admin-navbar.component';
import { AdminTeachersComponent } from './components/admin/admin-teachers/admin-teachers.component';
import { AdminStudensComponent } from './components/admin/admin-studens/admin-studens.component';
import { AdminLessonsComponent } from './components/admin/admin-lessons/admin-lessons.component';
import { AdminClassesComponent } from './components/admin/admin-classes/admin-classes.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeachersLayoutComponent } from './components/teachers/teachers-layout/teachers-layout.component';
import { TeachersSidenavComponent } from './components/teachers/teachers-layout/teachers-sidenav/teachers-sidenav.component';
import { TeachersNavbarComponent } from './components/teachers/teachers-layout/teachers-navbar/teachers-navbar.component';
import { TeachersFooterComponent } from './components/teachers/teachers-layout/teachers-footer/teachers-footer.component';
import { TeachersRightSidenavComponent } from './components/teachers/teachers-layout/teachers-right-sidenav/teachers-right-sidenav.component';
import { AnnouncementsComponent } from './components/teachers/announcements/announcements.component';
import { TestsComponent } from './components/teachers/tests/tests.component';
import { LecturenotesComponent } from './components/teachers/lecturenotes/lecturenotes.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsLayoutComponent } from './components/students/students-layout/students-layout.component';
import { StudentsNavbarComponent } from './components/students/students-layout/students-navbar/students-navbar.component';
import { StudentsSidenavComponent } from './components/students/students-layout/students-sidenav/students-sidenav.component';
import { StudentsFooterComponent } from './components/students/students-layout/students-footer/students-footer.component';
import { StudentsRightSidenavComponent } from './components/students/students-layout/students-right-sidenav/students-right-sidenav.component';
import { StudentsTestsComponent } from './components/students/students-tests/students-tests.component';
import { StudentsLecturenotesComponent } from './components/students/students-lecturenotes/students-lecturenotes.component';
import { StudentsReportcardComponent } from './components/students/students-reportcard/students-reportcard.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { StudentsLoginComponent } from './components/students/students-login/students-login.component';
import { TeachersLoginComponent } from './components/teachers/teachers-login/teachers-login.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AdminLayoutComponent,
    AdminSidenavComponent,
    AdminFooterComponent,
    AdminRightSidenavComponent,
    AdminNavbarComponent,
    AdminTeachersComponent,
    AdminStudensComponent,
    AdminLessonsComponent,
    AdminClassesComponent,
    TeachersComponent,
    TeachersLayoutComponent,
    TeachersSidenavComponent,
    TeachersNavbarComponent,
    TeachersFooterComponent,
    TeachersRightSidenavComponent,
    AnnouncementsComponent,
    TestsComponent,
    LecturenotesComponent,
    StudentsComponent,
    StudentsLayoutComponent,
    StudentsNavbarComponent,
    StudentsSidenavComponent,
    StudentsFooterComponent,
    StudentsRightSidenavComponent,
    StudentsTestsComponent,
    StudentsLecturenotesComponent,
    StudentsReportcardComponent,
    AdminLoginComponent,
    StudentsLoginComponent,
    TeachersLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot({
      closeButton:true,
      progressBar:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
