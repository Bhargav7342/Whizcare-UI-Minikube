import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment, Patient } from 'src/app/Models/database.models';
import { NurseService } from 'src/app/Service/nurse.service';
import { PatientServicesService } from 'src/app/Service/patient-services.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})



export class NurseComponent  implements OnInit{

  appointments:Appointment[]=[];
  patients:Patient[]=[];

   today: Date = new Date(); 
   dateString: string = this.today.toISOString().slice(0, 10); 
   
  

  constructor(private router:Router,private appointmentService:NurseService,private patientService:PatientServicesService){
    
  }
  ngOnInit(): void {
   this.appointmentService.getAllAppointmets(this.dateString).subscribe({
    next:(response)=>{
      this.appointments=response;
    response.forEach(element => {
      this.patientService.getPatientById(element.patientId).subscribe({
        next:(res)=>{
          this.patients.push(res); 
        }
      })
        
      });
    },
    error:(response)=>{
      window.alert("Something is wrong");
    }
   })
  }

  goto(value:any){
    this.router.navigate(['/addcheck'],{state:{appId:value}})
  }
 
  healthHistory(patientId:string)
  {
    this.router.navigate(['/healthHistoryNurse'],{state:{pId:patientId}})

  }
     added:boolean=false;

      }

