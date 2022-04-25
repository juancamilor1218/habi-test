import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientDataComponent } from './components/client-data/client-data.component';
import { ClientEmailComponent } from './components/client-email/client-email.component';
import { ApartmentAddressComponent } from './components/apartment-address/apartment-address.component';
import { StepStatusComponent } from './components/step-status/step-status.component';
import { ApartmentFloorComponent } from './components/apartment-floor/apartment-floor.component';
import { ApartmentAdditionalServicesComponent } from './components/apartment-additional-services/apartment-additional-services.component';
import { SummaryProcessComponent } from './components/summary-process/summary-process.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientDataComponent,
    ClientEmailComponent,
    ApartmentAddressComponent,
    StepStatusComponent,
    ApartmentFloorComponent,
    ApartmentAdditionalServicesComponent,
    SummaryProcessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
