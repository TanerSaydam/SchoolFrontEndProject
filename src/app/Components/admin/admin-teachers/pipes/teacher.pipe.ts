import { Pipe, PipeTransform } from '@angular/core';
import { TeacherModel } from '../model/teacherModel';

@Pipe({
  name: 'teacherPipe'
})
export class TeacherPipe implements PipeTransform {

  transform(value: any[], filterText:string): any[] {
    if(!filterText){
      return value;
    }

    return value.filter(p=> {
      const name = p.name.toLowerCase().toString().includes(filterText.toLocaleLowerCase());
      const identityNumber = p.identityNumber.toString().includes(filterText);
      const address = p.address.toLowerCase().toString().includes(filterText.toLowerCase());
      const gender = p.gender.toLowerCase().toString().includes(filterText.toLowerCase());
      return ( name+ identityNumber + address + gender);
    })
  }

}
