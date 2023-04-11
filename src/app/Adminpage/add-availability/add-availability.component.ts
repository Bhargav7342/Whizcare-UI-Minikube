import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {PhysicianAvailabilityStatus } from 'src/app/Models/database.models';
import { AvailabilityService } from 'src/app/Service/availability.service';
import { AddedsnackComponent } from 'src/app/Snackbars/addedsnack/addedsnack.component';

@Component({
  selector: 'app-add-availability',
  templateUrl: './add-availability.component.html',
})
export class AddAvailabilityComponent {
  constructor(private _snackBar: MatSnackBar,private _formBuilder: FormBuilder,private router:Router,private availabilityService:AvailabilityService,@Inject(MAT_DIALOG_DATA) public data:any) {}
  
  days:PhysicianAvailabilityStatus=({
    availabilityId :'',
    doctorId:'',
    sunday:false,
    monday:false,
    tuesday:false,
    wednesday:false,
    thursday:false,
    friday:false,
    saturday:false,
   })
  addAvailability(item:any){
    this.days=item
    this.days.doctorId=this.data.dataKey
    this.availabilityService.addAvailability(this.days).subscribe({
      next:(response)=>{
      this._snackBar.openFromComponent(AddedsnackComponent, {
        duration: 3 * 1000,
      });
      }
    })
    
    this.router.navigate(['/admin'])
  }
}
