import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IClientApartment from 'src/app/interfaces/IClientApartment';
import IStep from 'src/app/interfaces/IStep';
import IStepReduced from 'src/app/interfaces/IStepReduced';
import { LocalService } from 'src/app/services/local.service';
import ConcatFieldArrays from 'src/app/utils/ConcatFieldArrays';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.scss']
})
export class ClientDataComponent implements OnInit {

  ClientDataForm: FormGroup;
  data:IClientApartment;

  constructor(private fb:FormBuilder,private localService:LocalService) {    
    this.data = this.localService.getDataAparment();
    this.ClientDataForm = this.fb.group({
      name:['',Validators.required],
      surname:['',Validators.required]
    });
  }

  ngOnInit(): void {
   
  }

  get f(){
    return this.ClientDataForm.controls;
  }

  submit(){
    if(this.ClientDataForm.status=='VALID'){
      this.localService.setDataAparment(this.data); 
      let step:IStepReduced={
        url:'client-data',
        data: new ConcatFieldArrays(['Nombre','Apellidos'],[this.data.name,this.data.surname]).getArray()
      }    
      this.localService.setStep().next(step)
    }
  }

}
