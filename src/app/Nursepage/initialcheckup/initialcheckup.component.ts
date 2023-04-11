import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Allergy, PatientIntialCheckup } from 'src/app/Models/database.models';
import { AllergyService } from 'src/app/Service/allergy.service';
import { AppointmentService } from 'src/app/Service/appointment.service';
import { NurseService } from 'src/app/Service/nurse.service';
import { AddedsnackComponent } from 'src/app/Snackbars/addedsnack/addedsnack.component';

@Component({
  selector: 'app-initialcheckup',
  templateUrl: './initialcheckup.component.html',
  styleUrls: ['./initialcheckup.component.css']
})
export class InitialcheckupComponent implements OnInit{

  AddCheckUpDetail:any={
   
    appointmentId:'',
    height: 0,
    weight: 0,
    temperature:0,
    spo2:0,
    bloodPressure:'',
    sugarLevel:0,
    additionalDetails:'',
    chechupStatus:false,
  
  }
  AddAllergydetails:Allergy={
    allergyId:'',
    allergyName:'',
    appointmentId:'',
  }
  
  appointId:string|any='';
  constructor(private _snackBar: MatSnackBar,private router:Router,private initialcheckupservice:NurseService,private route:ActivatedRoute,private allergyservice:AllergyService,private appointmentservice:AppointmentService){
    const nav=this.router.getCurrentNavigation()?.extras.state as {appId:string}
    this.appointId=nav.appId
    
  }

  email:string|any=''
  allarr:string[]=[];
  ngOnInit(): void {
  }
   add_Check_Up(item:PatientIntialCheckup){
   
    this.AddCheckUpDetail.appointmentId=this.appointId
    this.AddCheckUpDetail.height=item.height
    this.AddCheckUpDetail.weight=item.weight
    this.AddCheckUpDetail.temperature=item.temperature
    this.AddCheckUpDetail.spo2=item.spo2
    this.AddCheckUpDetail.bloodPressure=item.bloodPressure
    this.AddCheckUpDetail.sugarLevel=item.sugarLevel
    this.AddCheckUpDetail.additionalDetails=item.additionalDetails
  
  
          this.initialcheckupservice.AddCheckUpDetails(this.AddCheckUpDetail).subscribe({
              next:(res)=>{
                this.AddCheckUpDetail=res;
                
            this.allarr.forEach(element => {
              const item1:any={
                allergyName:element,
                appointmentId:this.AddCheckUpDetail.appointmentId
                
              }
              
              if (this.allarr[0] == "None") 
              {
                this.allergyservice.AddAllergydetails(item1).subscribe({
                  next: (res1) => {
                    this.AddAllergydetails = res1
                  }
                })

              }
              else {
                this.allergyservice.AddAllergydetails(item1).subscribe({
                  next: (res1) => {
                    this.AddAllergydetails = res1
                  }
                })

              }

            this.appointmentservice.updateCheckUpStatus(this.AddCheckUpDetail.appointmentId,true).subscribe({
              next:(res)=>{

              }
            })
                
              });              
              this._snackBar.openFromComponent(AddedsnackComponent, {
                duration: 3 * 1000,
              });
          }
        })
    this.router.navigate(['/nurse']);
  }
  allergies = new FormControl('');
  allergyList: string[] = ['None', 'Eggs', 'Fish', 'Cow-Milk', 'Shellfish', 'Peanuts', 'Soy', 'Wheat', 'Sesame', 'Sulphites', 'Mustard'];
}
