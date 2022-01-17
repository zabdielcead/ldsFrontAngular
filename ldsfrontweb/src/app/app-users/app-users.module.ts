import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUsersRoutingModule } from './app-users-routing.module';
import { ListadoUsersComponent } from './pages/listado-users/listado-users.component';



@NgModule({
  declarations: [
  
    ListadoUsersComponent
  ],
  imports: [
    CommonModule,
    AppUsersRoutingModule
  ]
})
export class AppUsersModule { }
