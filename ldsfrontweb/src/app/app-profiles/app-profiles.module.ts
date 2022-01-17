import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppProfilesRoutingModule } from './app-profiles-routing.module';
import { ListadoProfilesComponent } from './pages/listado-profiles/listado-profiles.component';


@NgModule({
  declarations: [
    ListadoProfilesComponent
  ],
  imports: [
    CommonModule,
    AppProfilesRoutingModule
  ]
})
export class AppProfilesModule { }
