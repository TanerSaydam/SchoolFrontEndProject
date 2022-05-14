import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminClassesComponent } from './Components/admin/admin-classes/admin-classes.component';
import { AdminLayoutComponent } from './Components/admin/admin-layout/admin-layout.component';
import { AdminLessonsComponent } from './Components/admin/admin-lessons/admin-lessons.component';
import { AdminLoginComponent } from './Components/admin/admin-login/admin-login.component';
import { AdminStudensComponent } from './Components/admin/admin-studens/admin-studens.component';
import { AdminTeachersComponent } from './Components/admin/admin-teachers/admin-teachers.component';
import { AdminComponent } from './Components/admin/admin.component';
import { HomeComponent } from './Components/home/home.component';
import { StudentsLayoutComponent } from './Components/students/students-layout/students-layout.component';
import { StudentsLecturenotesComponent } from './Components/students/students-lecturenotes/students-lecturenotes.component';
import { StudentsLoginComponent } from './Components/students/students-login/students-login.component';
import { StudentsReportcardComponent } from './Components/students/students-reportcard/students-reportcard.component';
import { StudentsTestsComponent } from './Components/students/students-tests/students-tests.component';
import { StudentsComponent } from './Components/students/students.component';
import { AnnouncementsComponent } from './Components/teachers/announcements/announcements.component';
import { LecturenotesComponent } from './Components/teachers/lecturenotes/lecturenotes.component';
import { TeachersLayoutComponent } from './Components/teachers/teachers-layout/teachers-layout.component';
import { TeachersLoginComponent } from './Components/teachers/teachers-login/teachers-login.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { TestsComponent } from './Components/teachers/tests/tests.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'admin-login', component:AdminLoginComponent},
  {path: 'students-login', component:StudentsLoginComponent},
  {path: 'teachers-login', component:TeachersLoginComponent},
  {path: 'admin', component: AdminLayoutComponent, children:[
    {path: '', component:AdminComponent},
    {path: 'teachers', component:AdminTeachersComponent},
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
