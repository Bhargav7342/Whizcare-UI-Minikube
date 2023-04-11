import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Models/database.models';
import { AppointmentService } from 'src/app/Service/appointment.service';

@Component({
  selector: 'app-appointmenthistory',
  templateUrl: './appointmenthistory.component.html',
  styleUrls: ['./appointmenthistory.component.css']
})
export class AppointmenthistoryComponent implements OnInit {
 @Input() patientId:string|null='';
 @Input() patientEmail:string|null='';

  pid=this.patientId;
  appointments:Appointment[]=[];
  constructor(private router:Router,private appointmentService:AppointmentService){
  }
  ngOnInit(): void {
    
    if(this.patientId!=null){
   this.appointmentService.getAppointmentByPatientId(this.patientId).subscribe({
    next:(response)=>{
      this.appointments=response;
    },
    error:(response)=>{
      window.alert("Something is wrong");
    }
   })
  }}
  added:boolean=false;


handleClick(){

  this.added=true;

}
bookAppointment(){
  console.log(this.patientId);
  this.router.navigate(['/book'],{state:{patientId:this.patientId,pemail:this.patientEmail}});
}
}
