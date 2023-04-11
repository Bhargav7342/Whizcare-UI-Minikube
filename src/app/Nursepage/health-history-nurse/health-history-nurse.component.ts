import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HealthHistory } from 'src/app/Models/database.models';
import { ViewCheckUpComponent } from 'src/app/Patient/view-check-up/view-check-up.component';
import { ViewPrescriptionComponent } from 'src/app/Patient/view-prescription/view-prescription.component';
import { PatientServicesService } from 'src/app/Service/patient-services.service';


@Component({
  selector: 'app-health-history-nurse',
  templateUrl: './health-history-nurse.component.html',
  styleUrls: ['./health-history-nurse.component.css']
})
export class HealthHistoryNurseComponent implements OnInit{
 
  patientId:string="";
  fromOut:boolean=false;
  
  constructor(private dialogbox: MatDialog,private hhservices:PatientServicesService,private router:Router)
  {
    
    const nav=this.router.getCurrentNavigation()?.extras.state as {pId:string}
    this.patientId=nav.pId
    
  }
  
  health:HealthHistory[]=[];
  ngOnInit(): void {
    if(this.patientId!=null){
      this.hhservices.getHealthHistorybyPatientId(this.patientId).subscribe({
        next:(response)=>{
          this.health=response;
        }
      })
      }
  }
  
  openDiaog(value:string){
    this.dialogbox.open(ViewPrescriptionComponent,{
      height:'300px',
      width:'600px',
      data:{
        dataKey:value
      }
    });
  }
openDialog2(value:string){
  this.dialogbox.open(ViewCheckUpComponent,{
    height:'300px',
    width:'700px',
    data:{
      dataKey:value
    }
  })
}
goBack()
{
  this.router.navigate(['\NurseHomePage']);
}

}
