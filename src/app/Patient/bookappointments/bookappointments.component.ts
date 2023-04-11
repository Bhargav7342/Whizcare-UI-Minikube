import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { AvailabilityService } from 'src/app/Service/availability.service';
import { Doctor } from 'src/app/Models/database.models';
import { AppointmentService } from 'src/app/Service/appointment.service';
import { CustomdatePipe } from 'src/app/customdate.pipe';
import { BookedComponent } from 'src/app/Snackbars/booked/booked.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-bookappointments',
  templateUrl: './bookappointments.component.html',
  styleUrls: ['./bookappointments.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },CustomdatePipe
  ]
})
export class BookappointmentsComponent implements   OnInit {
  pid:string='';
  appdate:string='';
  pemailId:string='';
  constructor(private _snackBar: MatSnackBar,private custdate:CustomdatePipe,private router:Router,private availabilityService:AvailabilityService,private appointmentService:AppointmentService,private appointmentService1:AppointmentService){
    const nav=this.router.getCurrentNavigation()?.extras.state as {patientId:string,pemail:string};
    this.pid=nav.patientId;
    this.pemailId=nav.pemail;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  bookAppointment(item: any) 
  {
    this.appdate=item.date;
    const docinfo:String=(item.doctor.split(",",2));
    const item1:any={
      patientId:this.pid,
      doctorId:docinfo[0],
      date:this.appdate,
      doctorName:docinfo[1],
      concerns:item.concerns,
      status:"Sent"
    }

    var maildate=this.custdate.transform(this.appdate);

    this.appointmentService.bookAppointment(item1).subscribe({
      next:(response)=>
      {
        {
          this.appointmentService1.sendEmail(this.pemailId,maildate,"Sent").subscribe({
            next:(response)=>{
              }
            });
            this._snackBar.openFromComponent(BookedComponent, {
              duration: 2 * 1000,
            });
        }
        this.router.navigate(['/patientdashboard']);
      }
    });
}
  date1:string='';
  currDate:Date=new Date();
  availableDoctors:Doctor[]=[];


  sendEmailToPatient(){
    
  }
  findDocter(){
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const date = new Date(this.date1);
  this.availabilityService.getAllDoctorbyAvailability(weekday[date.getDay()]).subscribe({
    next:(response)=>{
      this.availableDoctors=response;
    }
  })

}
}
