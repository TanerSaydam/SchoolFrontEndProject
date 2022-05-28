import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { TeacherModel } from '../model/teacherModel';
import { TeacherService } from '../service/teacher.service';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './admin-teacher-edit.component.html',
  styleUrls: ['./admin-teacher-edit.component.scss']
})
export class AdminTeacherEditComponent implements OnInit {

  genders:string[] = [
    "Erkek",
    "Kadın"
  ]
  img: {
    imgUrl:string,
    imgName:string,
    imgSize:number
  } = {
    imgName: "",
    imgSize: 0,
    imgUrl: "/assets/img/noimage.jpg"
  };

  imgFile: any;
  teacherId:number = 0;
  teacher: TeacherModel = {
    address: "",
    firstEntry:true,
    gender:"",
    id:0,
    identityNumber:"",
    image:null,
    imageUrl: "",
    isActive: true,
    name: "",
    passwordHash: null,
    passwordSalt: null
  };

  @ViewChild("updateForm") private updateForm:NgForm

  constructor(
    private teacherService:TeacherService,
    private errorService:ErrorService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private spinner:NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    this.spinner.show();
    this.activatedRoute.params.subscribe((res:any)=>{
      this.teacherId = +res.id;
      this.teacherService.getById(res.id).subscribe((res:any)=>{
        this.spinner.hide();
        this.teacher = res.data;
        this.img.imgUrl = "./assets/img/Teachers/" + res.data.imageUrl
      },(err)=>{
        this.spinner.hide();
        this.errorService.errorHandler(err);
      })
    },(err)=>{
      this.spinner.hide();
      this.errorService.errorHandler(err);
    });
  }

  changeImage(event:any){
    if(event.target.files && event.target.files[0]){
      this.imgFile = event.target.files[0];
     this.img.imgName = event.target.files[0].name;
     this.img.imgSize = +event.target.files[0].size * 0.001;
     //console.log(event.target.files[0])
      var reader = new FileReader();
      reader.onload = (event:any)=>{
        this.img.imgUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  clearImg(){
    this.img = {
      imgName: "",
    imgSize: 0,
    imgUrl: "/assets/img/noimage.jpg"
    }
  }

  updateTeacher(){
    // // console.log(updateForm);
    // // if (updateForm.invalid) {
    // //   this.toastrService.error("Zorunlu alanları doldurun","Hata!");
    // //   return;
    // // }

    this.spinner.show();
    let formData = new FormData;
    formData.append("id", this.teacher.id.toString());
    formData.append("name",this.teacher.name);
    formData.append("identityNumber",this.teacher.identityNumber);
    formData.append("address",this.teacher.address);
    formData.append("gender",this.teacher.gender);
    if (!this.img.imgUrl.indexOf(this.teacher.imageUrl)) {
      formData.append("image",this.imgFile,this.img.imgName);
    }

    this.teacherService.updateTeacher(formData).subscribe((res:any)=>{
      this.spinner.hide();
      this.toastrService.success(res.message,"Başarılı");
      this.router.navigate(["/admin/teachers"]);
    },(err)=>{
      this.spinner.hide();
      console.log(err)
      this.errorService.errorHandler(err);
    });
  }


}
