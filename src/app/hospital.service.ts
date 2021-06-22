import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  createHospital() {

  }

  getAllHospitals() {
    return this.http.get(this.baseURL + '/hospitals');
  }

  updateHospital() {

  }

  deleteHospital() {

  }

}
