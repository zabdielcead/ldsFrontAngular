import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import('./login/login.module').then(m=> m.LoginModule)
  },
  {
    path:'appBat',
    loadChildren:() => import('./application/application.module').then(m=> m.ApplicationModule)
  },
  {
    path: '**', 
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
