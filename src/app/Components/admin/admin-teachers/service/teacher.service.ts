import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TeacherModel } from '../model/teacherModel';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers: TeacherModel[] = [];

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient: HttpClient
  ) { }

  addTeacher(teacherModel:any){
    let api = this.apiUrl + "Teachers/add";
    return  this.httpClient.post(api,teacherModel);
  }

  updateTeacher(teacherModel:any){
    let api = this.apiUrl + "Teachers/update";
    return this.httpClient.post(api,teacherModel);
  }

  getById(id:number){
    let api = this.apiUrl + "Teachers/getById?id=" + id;
    return this.httpClient.get(api);
  }

  getList(){
    let api = this.apiUrl + "Teachers/getlist";
    return this.httpClient.get(api);
  }
}
