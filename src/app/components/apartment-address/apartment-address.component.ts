import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IClientApartment from 'src/app/interfaces/IClientApartment';
import IStepReduced from 'src/app/interfaces/IStepReduced';
import { LocalService } from 'src/app/services/local.service';
import ConcatFieldArrays from 'src/app/utils/ConcatFieldArrays';

@Component({
  selector: 'app-apartment-address',
  templateUrl: './apartment-address.component.html',
  styleUrls: ['./apartment-address.component.scss']
})
export class ApartmentAddressComponent implements OnInit {

  ApartmentForm: FormGroup;
  data:IClientApartment;
  constructor(private fb:FormBuilder,private localService:LocalService) { 
    this.data = this.localService.getDataAparment();
    this.ApartmentForm = this.fb.group({
      address:['',Validators.required],   
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
        url:'apartment-address',
        data: new ConcatFieldArrays(['Dirección'],[this.data.address]).getArray()
      }  
      this.localService.setStep().next(step)
    }
  }

}
