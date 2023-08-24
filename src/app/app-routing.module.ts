import { NgModule } from '@angular/core';
//Importations des modules routes et routermodule
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
