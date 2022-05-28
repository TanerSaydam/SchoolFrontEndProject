import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
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
    private teacherService:TeacherService,
    private errorService:ErrorService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.teacherService.getList().subscribe((res:any)=>{
      this.teachers = res.data
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  returnIsActiveBtnClass(isActive:boolean){
    if (isActive) {
      return "btn btn-dark btn-sm mx-2";
    }else{
      return "btn btn-success btn-sm mx-2"
    }
  }

  returnIsActiveIconClass(isActive:boolean){
    if (isActive) {
      return "fa-solid fa-square";
    }else{
      return "fa-solid fa-square-check"
    }
  }

}
