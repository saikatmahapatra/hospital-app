import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalViewComponent } from './hospital-view/hospital-view.component';
import { DepartmentViewComponent } from './department-view/department-view.component';
const routes: Routes = [
  { path: '', redirectTo: '/hospital', pathMatch: 'full' },
  { path: 'hospital', component: HospitalViewComponent},
  { path: 'department', component: DepartmentViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
