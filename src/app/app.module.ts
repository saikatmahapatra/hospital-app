import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalViewComponent } from './hospital-view/hospital-view.component';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { ValidationErrorComponent } from './validation-error/validation-error.component';
@NgModule({
  declarations: [
    AppComponent,
    HospitalViewComponent,
    DepartmentViewComponent,
    ValidationErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ValidationErrorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
