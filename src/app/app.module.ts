import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalViewComponent } from './hospital-view/hospital-view.component';
import { DepartmentViewComponent } from './department-view/department-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalViewComponent,
    DepartmentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
