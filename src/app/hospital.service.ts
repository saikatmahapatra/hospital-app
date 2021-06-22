import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  createHospital(data) {
    return this.http.post(this.baseURL + '/hospitals', data);
  }

  getAllHospitals() {
    return this.http.get(this.baseURL + '/hospitals');
  }

  updateHospital() {

  }

  deleteHospital(hospital) {
    return this.http.delete(this.baseURL + '/hospitals/' + hospital.id);
  }

}
