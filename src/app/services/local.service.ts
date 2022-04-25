import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import IClientApartment from '../interfaces/IClientApartment';
import IStep from '../interfaces/IStep';
import { HttpClient } from '@angular/common/http';
import IStepReduced from '../interfaces/IStepReduced';
@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private steps$ = new Subject<IStepReduced>();
  private dataConfig = './assets/config.json'

  constructor(private http: HttpClient) { }

  getDataAparment():IClientApartment{  
   
    let clientData:IClientApartment; 
   
    let objectAux = localStorage.getItem('dataApartment') || '';
    if(objectAux!=""){
      clientData = JSON.parse(objectAux);        
    }else{
      clientData = {
        name:'',
        address:'',
        email:'',
        floor:1,
        surname:'',
        additionalServices:[]
      }  
  
    }
         
    return clientData;
  }

  setDataAparment(data:IClientApartment):void{
    let objectAux = JSON.stringify(data);
    localStorage.setItem("dataApartment",objectAux);
  }

  getConfig():Observable<any>{
    return this.http.get<any>(this.dataConfig);
  }


  getStep():Observable<IStepReduced>{
    return this.steps$.asObservable();    
  }

  setStep():Subject<IStepReduced>{
    return this.steps$;
  }


  
}
