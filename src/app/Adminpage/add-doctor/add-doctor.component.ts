import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Models/database.models';
import { AvailabilityService } from 'src/app/Service/availability.service';
import { AddAvailabilityComponent } from '../add-availability/add-availability.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddedsnackComponent } from 'src/app/Snackbars/addedsnack/addedsnack.component';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  constructor(private dialogbox:MatDialog,private availabilityService:AvailabilityService,private router:Router,private _snackBar: MatSnackBar){}

  doctor:Doctor={
    doctorId:'',
    doctorName:'',
    email:'',
    qualification:'',
    department:''
  }
  docid:string="";

  AddDoctor(item:any) {
    this.availabilityService.addDoctor(item).subscribe({
      next: (response) => {
        sessionStorage.setItem('addDocId', response.doctorId);
        this.doctor = response;

        this.dialogbox.open(AddAvailabilityComponent, {
          height: '400px',
          width: '500px',
          data: {
            dataKey: response.doctorId
          }
        })
        
      },
      error:(e)=>{
      window.alert("Failed")
      }
    });
  }
}
