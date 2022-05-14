import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminLayoutComponent } from './Components/admin/admin-layout/admin-layout.component';
import { AdminSidenavComponent } from './Components/admin/admin-layout/admin-sidenav/admin-sidenav.component';
import { AdminFooterComponent } from './Components/admin/admin-layout/admin-footer/admin-footer.component';
import { AdminRightSidenavComponent } from './Components/admin/admin-layout/admin-right-sidenav/admin-right-sidenav.component';
import { AdminNavbarComponent } from './Components/admin/admin-layout/admin-navbar/admin-navbar.component';
import { AdminTeachersComponent } from './Components/admin/admin-teachers/admin-teachers.component';
import { AdminStudensComponent } from './Components/admin/admin-studens/admin-studens.component';
import { AdminLessonsComponent } from './Components/admin/admin-lessons/admin-lessons.component';
import { AdminClassesComponent } from './Components/admin/admin-classes/admin-classes.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { TeachersLayoutComponent } from './Components/teachers/teachers-layout/teachers-layout.component';
import { TeachersSidenavComponent } from './Components/teachers/teachers-layout/teachers-sidenav/teachers-sidenav.component';
import { TeachersNavbarComponent } from './Components/teachers/teachers-layout/teachers-navbar/teachers-navbar.component';
import { TeachersFooterComponent } from './Components/teachers/teachers-layout/teachers-footer/teachers-footer.component';
import { TeachersRightSidenavComponent } from './Components/teachers/teachers-layout/teachers-right-sidenav/teachers-right-sidenav.component';
import { AnnouncementsComponent } from './Components/teachers/announcements/announcements.component';
import { TestsComponent } from './Components/teachers/tests/tests.component';
import { LecturenotesComponent } from './Components/teachers/lecturenotes/lecturenotes.component';
import { StudentsComponent } from './Components/students/students.component';
import { StudentsLayoutComponent } from './Components/students/students-layout/students-layout.component';
import { StudentsNavbarComponent } from './Components/students/students-layout/students-navbar/students-navbar.component';
import { StudentsSidenavComponent } from './Components/students/students-layout/students-sidenav/students-sidenav.component';
import { StudentsFooterComponent } from './Components/students/students-layout/students-footer/students-footer.component';
import { StudentsRightSidenavComponent } from './Components/students/students-layout/students-right-sidenav/students-right-sidenav.component';
import { StudentsTestsComponent } from './Components/students/students-tests/students-tests.component';
import { StudentsLecturenotesComponent } from './Components/students/students-lecturenotes/students-lecturenotes.component';
import { StudentsReportcardComponent } from './Components/students/students-reportcard/students-reportcard.component';
import { AdminLoginComponent } from './Components/admin/admin-login/admin-login.component';
import { StudentsLoginComponent } from './Components/students/students-login/students-login.component';
import { TeachersLoginComponent } from './Components/teachers/teachers-login/teachers-login.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
