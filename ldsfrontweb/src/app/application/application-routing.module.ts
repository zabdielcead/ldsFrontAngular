import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppComponent } from './pages/main-app/main-app.component';
import { AppUsersModule } from '../app-users/app-users.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [


 
  {
    path:'',
    component: MainAppComponent, 
    children:[
      {
        path:'users',
        loadChildren:() => import('./../app-users/app-users.module').then(m=> m.AppUsersModule)
      },
      {
        path:'welcome',
        component: WelcomeComponent
      }
    ]
  },
  {
    path: '**', 
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
