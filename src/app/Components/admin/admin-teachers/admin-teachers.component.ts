import { Component, OnInit } from '@angular/core';
import { TeacherModel } from './model/teacherModel';
import { TeacherService } from './service/teacher.service';

@Component({
  selector: 'app-admin-teachers',
  templateUrl: './admin-teachers.component.html',
  styleUrls: ['./admin-teachers.component.scss']
})
export class AdminTeachersComponent implements OnInit {

  teachers:TeacherModel [] = []
  filterText="";

  constructor(
    private teacherService:TeacherService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.teachers = this.teacherService.teachers;
  }

}
