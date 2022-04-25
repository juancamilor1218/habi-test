import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IClientApartment from 'src/app/interfaces/IClientApartment';
import IStepReduced from 'src/app/interfaces/IStepReduced';
import { LocalService } from 'src/app/services/local.service';
import ConcatFieldArrays from 'src/app/utils/ConcatFieldArrays';

@Component({
  selector: 'app-client-email',
  templateUrl: './client-email.component.html',
  styleUrls: ['./client-email.component.scss']
})
export class ClientEmailComponent implements OnInit {

  ClientDataForm: FormGroup;
  data:IClientApartment;
  constructor(private fb:FormBuilder,private localService:LocalService) { 
    this.data = this.localService.getDataAparment();
    console.log(this.data);
    this.ClientDataForm = this.fb.group({
      email:['',Validators.email],   
    });
  }

  ngOnInit(): void {
    
  }

  get f(){
    return this.ClientDataForm.controls;
  }

  submit(){
    console.log("submit",this.data)
    if(this.ClientDataForm.status=='VALID'){
      this.localService.setDataAparment(this.data); 
      let step:IStepReduced={
        url:'client-email',
        data: new ConcatFieldArrays(['Email'],[this.data.email]).getArray()
      }  
      this.localService.setStep().next(step)
    }
  }
}
