import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuenioListComponent } from './components/duenio-list/duenio-list.component';
import { CreateDuenioComponent } from './components/create-duenio/create-duenio.component';

const routes: Routes = [
  {path:"" , component : DuenioListComponent},
  {path:"createDuenio" , component: CreateDuenioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
