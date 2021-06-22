import { Component, OnInit, OnDestroy } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { ValidationService } from '../validation.service';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.scss'],
  providers: [HospitalService, ValidationService]
})
export class HospitalViewComponent implements OnInit, OnDestroy {
  hospitalList: any = [];
  hospitalDataList$;
  hospitalForm: FormGroup;
  formSubmitted = false;
  constructor(
    private hospitalSvc: HospitalService,
    private fb: FormBuilder,
    private validator: ValidationService
  ) { }

  ngOnInit() {
    this.getAllHospitals();
    this.createHospitalForm();
  }

  createHospitalForm() {
    this.hospitalForm = new FormGroup({
      hospitalname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      contactnumber: new FormControl('', [Validators.required, this.validator.phone_number]),
    });
  }

  getAllHospitals() {
    this.hospitalDataList$ = this.hospitalSvc.getAllHospitals().subscribe((res) => {
      this.hospitalList = res;
    });
  }

  addHospital(formObj) {
    this.formSubmitted = true;
    console.log(formObj.value);
    if (formObj.valid) {
      this.hospitalSvc.createHospital(formObj.value).subscribe(response => {
        alert('Hospital added successfully!');
        formObj.reset();
        this.getAllHospitals();
      });
    }
  }

  editHospital(hospital) {
    console.log(hospital);
  }

  deleteHospital(hospital) {
    console.log(hospital);
    this.hospitalSvc.deleteHospital(hospital).subscribe( () => {
      alert('Hospital has been deleted successfully!');
      this.getAllHospitals();
    });
  }

  ngOnDestroy() {
    this.hospitalDataList$.unsubscribe();
  }

}
