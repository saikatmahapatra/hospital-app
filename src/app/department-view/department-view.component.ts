import { Component, OnInit, OnDestroy } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { ValidationService } from '../validation.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.scss'],
  providers: [HospitalService, ValidationService]
})
export class DepartmentViewComponent implements OnInit, OnDestroy {
  departmentList: any = [];
  departmentDataList$;
  formSubmitted = false;
  isEdit = false;
  queryParamHospitalId: number;
  queryParamHospitalName: string = '';
  pageTitle = 'Departments';
  showBackLink = false;

  departmentObj = {
    departmentname: '',
    head: '',
    contactnumber: '',
    hospitalId: '',
    hospitalname: ''
  };

  constructor(
    private hospitalSvc: HospitalService,
    private validator: ValidationService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.queryParamHospitalId = params['hospitalId'];
      this.queryParamHospitalName = params['hospitalName'];
  });
   }

  ngOnInit() {
    if (this.queryParamHospitalName) {
      this.getAllDeptsOfHospital();
      this.pageTitle = 'Department of ' + this.queryParamHospitalName;
      this.showBackLink = true;

    } else {
      this.getAllDepts();
    }
  }

  getAllDepts() {
    this.departmentDataList$ = this.hospitalSvc.getAllDept().subscribe((res) => {
      this.departmentList = res;
    });
  }

  getAllDeptsOfHospital() {
    this.departmentDataList$ = this.hospitalSvc.getAllDeptOfHosp(this.queryParamHospitalId, this.queryParamHospitalName).subscribe((res) => {
      this.departmentList = res;
    });
  }

  editDept(dept) {
    alert('edit operation is not implemented');
  }

  deleteDept(dept) {
    alert('delete operation is not implemented');
  }

  ngOnDestroy() {
    this.departmentDataList$.unsubscribe();
  }


}
