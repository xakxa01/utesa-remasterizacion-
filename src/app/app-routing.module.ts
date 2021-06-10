import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from "../app/component/inicio/inicio.component";
import { ErrorComponent } from "../app/component/error/error.component";

const routes: Routes = [{
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: '**',
    component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}