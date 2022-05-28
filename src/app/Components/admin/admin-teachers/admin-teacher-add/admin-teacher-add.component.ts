import { AfterContentChecked, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
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

  imgFile: any ;

  @ViewChild("addForm") addForm:NgForm;

  constructor(
    private teacherService:TeacherService,
    private toastrService:ToastrService,
    private errorService:ErrorService
  ) {}

  ngOnInit(): void {
  }

  addTeacher(addForm:any){
    if (addForm.invalid) {
      this.toastrService.error("Zorunlu alanları doldurun","Hata!");
      return;
    }

    let formData = new FormData;
    formData.append("name",addForm.value.name);
    formData.append("identityNumber",addForm.value.identityNumber);
    formData.append("address",addForm.value.address);
    formData.append("gender",addForm.value.gender);
    formData.append("image",this.imgFile,this.img.imgName);

    this.teacherService.addTeacher(formData).subscribe((res)=>{
      this.toastrService.success("Öğretmen kaydı başarıyla oluşturuldu","Başarılı");
      this.addForm.reset();
      this.clearImg();
    },(err)=>{
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

}
