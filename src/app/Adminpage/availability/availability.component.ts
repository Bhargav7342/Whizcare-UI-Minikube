import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PhysicianAvailabilityStatus } from 'src/app/Models/database.models';
import { AvailabilityService } from 'src/app/Service/availability.service';
import { AddedsnackComponent } from 'src/app/Snackbars/addedsnack/addedsnack.component';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit{
  
  days:PhysicianAvailabilityStatus =({
    availabilityId :'',
    doctorId:'',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday:false,
  });

  email:string | any='';
  docid:string|any ='';
  email1:string='';
  dname:string='';
  constructor(private _snackBar: MatSnackBar,private route:ActivatedRoute,private _formBuilder: FormBuilder,private router:Router,private availabilityservice:AvailabilityService) {
    const nav=this.router.getCurrentNavigation()?.extras.state as {email:string,name:string}
    this.email=nav.email;
    this.dname=nav.name;
  }
  ngOnInit(): void {
    this.availabilityservice.getDoctorIdbyEmail(this.email).subscribe({
      next:(response)=>{
        this.availabilityservice.getStatusByDoctorId(response.doctorId).subscribe({
          next:(response1)=>{
            this.days=response1
          }
        })
      }
    })
    
  }
  saveAvailability() {
    this.availabilityservice.updateDoctorAvailablity(this.days).subscribe({
      next:(resonse)=>{
        
        this._snackBar.openFromComponent(AddedsnackComponent, {
          duration: 3 * 1000,
        });
        this.router.navigate(['/admin']);
      }
    })
    
  }
}
