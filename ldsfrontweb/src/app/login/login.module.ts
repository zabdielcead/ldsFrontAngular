import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SendpasswordComponent } from './pages/sendpassword/sendpassword.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SendpasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
