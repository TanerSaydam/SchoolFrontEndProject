import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private toasrtrService:ToastrService
  ) { }

  errorHandler(err:any){
    this.toasrtrService.error(err.error);
  }
}
