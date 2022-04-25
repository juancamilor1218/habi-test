import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IClientApartment from 'src/app/interfaces/IClientApartment';
import IStepReduced from 'src/app/interfaces/IStepReduced';
import { LocalService } from 'src/app/services/local.service';
import ConcatFieldArrays from 'src/app/utils/ConcatFieldArrays';

@Component({
  selector: 'app-apartment-floor',
  templateUrl: './apartment-floor.component.html',
  styleUrls: ['./apartment-floor.component.scss']
})
export class ApartmentFloorComponent implements OnInit {

  ApartmentForm: FormGroup;
  data:IClientApartment;
  constructor(private fb:FormBuilder,private localService:LocalService) { 
    this.data = this.localService.getDataAparment();
    this.ApartmentForm = this.fb.group({
      floor:['',[Validators.required,Validators.max(50),Validators.min(0)]],   
    });
  }

  ngOnInit(): void {
    
  }

  get f(){
    return this.ApartmentForm.controls;
  }

  submit(){
    if(this.ApartmentForm.status=='VALID'){
      this.localService.setDataAparment(this.data);    
      let step:IStepReduced={
        url:'apartment-floor',
        data: new ConcatFieldArrays(['Piso'],[this.data.floor]).getArray()
      }  
      this.localService.setStep().next(step)
    }
  }
}
