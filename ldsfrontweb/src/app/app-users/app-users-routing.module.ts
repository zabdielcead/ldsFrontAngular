import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoUsersComponent } from './pages/listado-users/listado-users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {  
          path: 'listadoUsers',
          component: ListadoUsersComponent

      },{
        path:'**',
        redirectTo: 'listadoUsers'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUsersRoutingModule { }
