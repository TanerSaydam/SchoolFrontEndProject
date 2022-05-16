import { AfterContentChecked, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TeacherModel } from '../model/teacherModel';
import { TeacherService } from '../service/teacher.service';

@Component({
  selector: 'app-admin-teacher-add',
  templateUrl: './admin-teacher-add.component.html',
  styleUrls: ['./admin-teacher-add.component.scss']
})
export class AdminTeacherAddComponent implements OnInit{

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

  @ViewChild("addForm") addForm:NgForm;

  constructor(
    private teacherService:TeacherService,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
  }

  addTeacher(addForm:any){
    if (addForm.invalid) {
      this.toastrService.error("Zorunlu alanları doldurun","Hata!");
      return;
    }

    let formData = new FormData;
    //formData.append("img",this.img.imgUrl,this.img.imgName);

    let teacherModel = new TeacherModel();
    teacherModel.name = addForm.value.name;
    teacherModel.address = addForm.value.address;
    teacherModel.identityNumber = addForm.value.identityNumber;
    teacherModel.firstEntry = true;
    teacherModel.gender = addForm.value.gender;
    teacherModel.imageUrl = this.img.imgUrl;
    teacherModel.isActive = true;

    this.teacherService.addTeacher(teacherModel,formData);
    this.toastrService.success("Öğretmen kaydı başarıyla oluşturuldu","Başarılı");
    this.addForm.reset();
    this.clearImg();
  }

  changeImage(event:any){
    if(event.target.files && event.target.files[0]){

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

}
