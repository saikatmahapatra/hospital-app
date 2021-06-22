import { Component, OnInit, OnDestroy } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { ValidationService } from '../validation.service';
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
  
  departmentObj = {
    departmentname: '',
    head : '',
    contactnumber: '',
    hospitalId: '',
    hospitalname: ''
  };

  constructor(
    private hospitalSvc: HospitalService,
    private validator: ValidationService
  ) { }

  ngOnInit() {
    this.getAllDepts();
  }

  getAllDepts() {
    this.departmentDataList$ = this.hospitalSvc.getAllDept().subscribe((res) => {
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
