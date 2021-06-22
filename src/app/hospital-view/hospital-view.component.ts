import { Component, OnInit, OnDestroy } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { ValidationService } from '../validation.service';
//import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.scss'],
  providers: [HospitalService, ValidationService]
})
export class HospitalViewComponent implements OnInit, OnDestroy {
  hospitalList: any = [];
  hospitalDataList$;
  //hospitalForm: FormGroup;
  formSubmitted = false;
  isEdit = false;
  hospitalObj = {
    hospitalname: '',
    contactnumber : '',
    id: ''
  };
  constructor(
    private hospitalSvc: HospitalService,
    //private fb: FormBuilder,
    private validator: ValidationService
  ) { }

  ngOnInit() {
    this.getAllHospitals();
    //this.createHospitalForm();
  }

  // createHospitalForm() {
  //   this.hospitalForm = new FormGroup({
  //     hospitalname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
  //     contactnumber: new FormControl('', [Validators.required, this.validator.phone_number]),
  //   });
  // }

  getAllHospitals() {
    this.hospitalDataList$ = this.hospitalSvc.getAllHospitals().subscribe((res) => {
      this.hospitalList = res;
    });
  }

  returnToAddView(formObj) {
    this.isEdit = false;
    formObj.reset();
  }

  addHospital(formObj) {
    this.formSubmitted = true;
    if (formObj.valid) {
      this.hospitalSvc.createHospital(formObj.value).subscribe(response => {
        alert('Added successfully!');
        formObj.reset();
        this.getAllHospitals();
      });
    }
  }

  editHospital(hospital) {
    this.isEdit = true;
    this.hospitalObj = hospital;
  }

  updateHospital(formObj) {
    this.isEdit = !this.isEdit;
    this.hospitalSvc.updateHospital(this.hospitalObj).subscribe( () => {
      alert('Updated successfully!');
      formObj.reset();
      this.getAllHospitals();
    });
  }

  deleteHospital(hospital) {
    this.hospitalSvc.deleteHospital(hospital).subscribe( () => {
      alert('Deleted successfully!');
      this.getAllHospitals();
    });
  }

  ngOnDestroy() {
    this.hospitalDataList$.unsubscribe();
  }

}
