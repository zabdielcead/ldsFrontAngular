import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SendpasswordComponent } from './pages/sendpassword/sendpassword.component';




const routes: Routes = [
    {
        path:'',
        //component:LoginComponent,
        children: [
          {path: 'login', component: LoginComponent},
          {path: 'sendPass', component: SendpasswordComponent},
          {path: '**', redirectTo: 'login'}
        ]
      }
]


@NgModule({
  
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class LoginRoutingModule { }