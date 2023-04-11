import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment, Patient } from 'src/app/Models/database.models';
import { DoctorService } from 'src/app/Service/doctor.service';
import { PatientServicesService } from 'src/app/Service/patient-services.service';

@Component({
  selector: 'app-appointmentsfortoday',
  templateUrl: './appointmentsfortoday.component.html',
  styleUrls: ['./appointmentsfortoday.component.css']
})
export class AppointmentsfortodayComponent implements OnInit{
  @Input() docid:string|any='';
  @Input() dname:string|any='';
  @Input() docemail:string|any=''
  
  patient:Patient[]=[];
  appointments:Appointment[]=[];
  today: Date = new Date(); 
  dateString: string = this.today.toISOString().slice(0, 10); 
  constructor(private router:Router,private doctorservice:DoctorService,private patientservice:PatientServicesService){}
  
 
  async ngOnInit(): Promise<void> {
    const sleep=(ms:number |undefined)=>new Promise(r=>setTimeout(r,ms));
    await sleep(3000);
    this.docid=sessionStorage.getItem('docId')
    this.doctorservice.GetAppointmentsAfterCheckup(this.dateString,this.docid).subscribe({
      next:(response)=>{
        this.appointments=response;
        response.forEach(element => {
          this.patientservice.getPatientById(element.patientId).subscribe({
            next:(res)=>{
              this.patient.push(res); 
            }
          })
            
          });
      }
    })
   
    
  }
  added:boolean=false;

  

  handleClick(appId:string,pId:string){
    this.router.navigate(['/adddiagnosis'],{state:{appointmentId:appId,patientId:pId,docname:this.dname,docemail:this.docemail}});
  }
}
