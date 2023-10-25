import { Component } from '@angular/core';
import { STAFFS} from '../mock-deptstaff';
import { Staff } from '../staff';
import { Location } from '@angular/common';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  
  constructor(private location: Location) {}
  
  selectedStaff?: Staff;
  staffs  =STAFFS;
 
  onSelect(staff: Staff): void {
    this.selectedStaff = staff;
    console.log(this.selectedStaff);
  }
  goBack():void{
    this.location.back();
  }



  // staff:Staff={
  //   id:1,
  //   name:'Nivya'
  // }

}
