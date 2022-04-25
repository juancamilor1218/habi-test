import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import IClientApartment from 'src/app/interfaces/IClientApartment';
import IStepReduced from 'src/app/interfaces/IStepReduced';
import { LocalService } from 'src/app/services/local.service';
import ConcatFieldArrays from 'src/app/utils/ConcatFieldArrays';

@Component({
  selector: 'app-apartment-additional-services',
  templateUrl: './apartment-additional-services.component.html',
  styleUrls: ['./apartment-additional-services.component.scss']
})
export class ApartmentAdditionalServicesComponent implements OnInit {

  ApartmentForm: FormGroup;
  data:IClientApartment;
  constructor(private fb:FormBuilder,private localService:LocalService) { 
    this.data = this.localService.getDataAparment();
    this.ApartmentForm = this.fb.group({
      zona:[false],   
      parque:[false],
      salon:[false]
    });
  }

  ngOnInit(): void {  
  }

  onCheckChange(e){    
    if(e.target.checked){
      
      this.data.additionalServices.push(e.target.value);
    }  
    else{    
      let i: number = 0;
  
      this.data.additionalServices.forEach((item: string) => {
        if(item == e.target.value) {
          
          this.data.additionalServices.splice(i)
          return;
        }
        i++;
      });
    }  
  }

  submit(){
    if(this.ApartmentForm.status=='VALID'){
      this.localService.setDataAparment(this.data);
      console.log(this.ApartmentForm)
      let step:IStepReduced={
        url:'apartment-additional',
        data: new ConcatFieldArrays(['Servicios'],[this.data.additionalServices.join(", ")]).getArray()//TODO: PRESENTAR SERVICIOS
      }    
      this.localService.setStep().next(step)
    }
  }


}
