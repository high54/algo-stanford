import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { StepOneComponent } from './step-one/step-one.component';

const routes: Routes = [
  {
    path: 'step-one',
    component: StepOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
