import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminClassesComponent } from './components/admin/admin-classes/admin-classes.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AdminLessonsComponent } from './components/admin/admin-lessons/admin-lessons.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminStudensComponent } from './components/admin/admin-studens/admin-studens.component';
import { AdminTeacherAddComponent } from './components/admin/admin-teachers/admin-teacher-add/admin-teacher-add.component';
import { AdminTeachersComponent } from './components/admin/admin-teachers/admin-teachers.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsLayoutComponent } from './components/students/students-layout/students-layout.component';
import { StudentsLecturenotesComponent } from './components/students/students-lecturenotes/students-lecturenotes.component';
import { StudentsLoginComponent } from './components/students/students-login/students-login.component';
import { StudentsReportcardComponent } from './components/students/students-reportcard/students-reportcard.component';
import { StudentsTestsComponent } from './components/students/students-tests/students-tests.component';
import { StudentsComponent } from './components/students/students.component';
import { AnnouncementsComponent } from './components/teachers/announcements/announcements.component';
import { LecturenotesComponent } from './components/teachers/lecturenotes/lecturenotes.component';
import { TeachersLayoutComponent } from './components/teachers/teachers-layout/teachers-layout.component';
import { TeachersLoginComponent } from './components/teachers/teachers-login/teachers-login.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TestsComponent } from './components/teachers/tests/tests.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'admin-login', component:AdminLoginComponent},
  {path: 'students-login', component:StudentsLoginComponent},
  {path: 'teachers-login', component:TeachersLoginComponent},
  {path: 'admin', component: AdminLayoutComponent, children:[
    {path: '', component:AdminComponent},
    {path: 'teachers', component:AdminTeachersComponent},
    {path: 'teachers/add', component:AdminTeacherAddComponent},
    {path: 'students', component:AdminStudensComponent},
    {path: 'lessons', component:AdminLessonsComponent},
    {path: 'classes', component:AdminClassesComponent}
  ]},
  {path: 'teachers', component: TeachersLayoutComponent, children:[
    {path: '', component:TeachersComponent},
    {path: 'announcements', component:AnnouncementsComponent},
    {path: 'lecturenotes', component:LecturenotesComponent},
    {path: 'tests', component:TestsComponent},
  ]},
  {path: 'students', component: StudentsLayoutComponent, children:[
    {path: '', component:StudentsComponent},
    {path: 'tests', component:StudentsTestsComponent},
    {path: 'lecturenotes', component:StudentsLecturenotesComponent},
    {path: 'reportcard', component:StudentsReportcardComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
