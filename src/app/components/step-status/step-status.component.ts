import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import DataStep from 'src/app/interfaces/IDataStep';
import IStep from 'src/app/interfaces/IStep';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-step-status',
  templateUrl: './step-status.component.html',
  styleUrls: ['./step-status.component.scss']
})
export class StepStatusComponent implements OnInit {

  currentStep:IStep;
  configStep:IStep[];

  constructor(private localService:LocalService,private router:Router) {
    this.currentStep = {
      currentStep:1,
      lastStep:false,
      nameStep:'Inicio',
      data:[],
      url:'',
      status:false
    }
  }

  ngOnInit(): void {
    this.localService.getConfig().subscribe(
      res=>{
        this.configStep = res;
        this.goStep(1);
        this.initObservable();
      },
      err=>{

      }
    )
  }

  initObservable(){
    this.localService.getStep().subscribe(
      res=>{     
        this.updateStatusStep(res.url,res.data);
      }
    )
  }

  updateStatusStep(url:string,data:DataStep[]){
    this.configStep.map((element)=>{
      if(element.url == url){
        element.status = true;    
        element.data = data;  
        this.goStep(element.currentStep+1);
      }
    })  
    console.log(this.configStep); 
  }

  goStep(step:number){ 
    if(step<=this.configStep.length){
      this.configStep.forEach(element => {
        if(step==element.currentStep){
          this.currentStep = element;
          this.router.navigate([element.url]);
        }
      });
    }else{
      this.localService.setStep().complete();
    }       
   
  }



}
