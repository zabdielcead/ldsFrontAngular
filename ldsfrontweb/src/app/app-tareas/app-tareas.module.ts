import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppTareasRoutingModule } from './app-tareas-routing.module';
import { ListadoTareasComponent } from './pages/listado-tareas/listado-tareas.component';


@NgModule({
  declarations: [
    ListadoTareasComponent
  ],
  imports: [
    CommonModule,
    AppTareasRoutingModule
  ]
})
export class AppTareasModule { }
