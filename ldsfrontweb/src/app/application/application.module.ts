import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { MainAppComponent } from './pages/main-app/main-app.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';



@NgModule({
  declarations: [
    MainAppComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ApplicationModule { }
