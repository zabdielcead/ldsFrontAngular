import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './pages/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
            FooterComponent,
            MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
