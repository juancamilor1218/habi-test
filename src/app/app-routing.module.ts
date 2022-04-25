import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDataComponent } from './components/client-data/client-data.component';
import { ApartmentAddressComponent } from './components/apartment-address/apartment-address.component';
import { ApartmentFloorComponent } from './components/apartment-floor/apartment-floor.component';
import { ClientEmailComponent } from './components/client-email/client-email.component';
import { SummaryProcessComponent } from './components/summary-process/summary-process.component';
import { ApartmentAdditionalServicesComponent } from './components/apartment-additional-services/apartment-additional-services.component';
const routes: Routes = [
  
    {path:'client-data' , component: ClientDataComponent},    
    {path:'client-email' , component: ClientEmailComponent}, 
    {path:'apartment-floor' , component: ApartmentFloorComponent},
    {path:'apartment-address' , component: ApartmentAddressComponent}, 
    {path:'apartment-additional' , component: ApartmentAdditionalServicesComponent}, 
    {path:'summary-process' , component: SummaryProcessComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
