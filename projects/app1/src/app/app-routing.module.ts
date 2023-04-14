import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'app1/1', component: View1Component },
  { path: 'app1/2', component: View2Component },
  { path: 'app1', redirectTo: 'app1/1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
