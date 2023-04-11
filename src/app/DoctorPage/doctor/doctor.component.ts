import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DoctorService } from 'src/app/Service/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent  {
  docemail:string='';
  dname:string='';
  docid:string='';
  currDate:string=new Date().toISOString();
  constructor(private router:Router,private docserve:DoctorService) {
    const nav=this.router.getCurrentNavigation()?.extras.state as {email:string,dname:string}
    this.docemail=nav.email;
    this.docserve.getDoctorDetails(this.docemail).subscribe({
      next:(response)=>{
        this.docid=response.doctorId;
        this.dname=response.doctorName
        sessionStorage.setItem('docId',this.docid);
      }
    })
  }

  PendingAppointments()
  {
    this.router.navigate(["/pendingAppointments"],{state:{doctorId:this.docid,dname:this.dname,demail:this.docemail}});
  }
  }

