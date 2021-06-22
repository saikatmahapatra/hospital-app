import { Component, OnInit, OnDestroy } from '@angular/core';
import { HospitalService } from '../hospital.service';
@Component({
  selector: 'app-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.scss'],
  providers: [HospitalService]
})
export class HospitalViewComponent implements OnInit, OnDestroy {
  hospitalList: any = [];
  hospitalDataList$;
  constructor(
    private hospitalSvc: HospitalService
  ) { }

  ngOnInit() {
    this.getAllHospitals();
  }

  getAllHospitals() {
    this.hospitalDataList$ = this.hospitalSvc.getAllHospitals().subscribe((res) => {
      this.hospitalList = res;
    });
  }

  addHospital() {

  }

  editHospital(hospital) {
    console.log(hospital);
  }

  deleteHospital(hospital) {
    console.log(hospital);
  }

  ngOnDestroy() {
    this.hospitalDataList$.unsubscribe();
  }

}
