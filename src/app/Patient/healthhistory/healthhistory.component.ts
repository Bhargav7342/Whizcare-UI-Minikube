import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HealthHistory } from 'src/app/Models/database.models';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
import { ViewCheckUpComponent } from '../view-check-up/view-check-up.component';
import { ViewPrescriptionComponent } from '../view-prescription/view-prescription.component';

@Component({
  selector: 'app-healthhistory',
  templateUrl: './healthhistory.component.html',
  styleUrls: ['./healthhistory.component.css']
})
export class HealthhistoryComponent implements OnInit{
  @Input() patientId:string|null=''; 
  patientIdOut:string="";
  fromOut:boolean=false;
  pid:string|any=this.patientId;
  constructor(private dialogbox: MatDialog,private hhservices:PatientServicesService,private router:Router)
  {
    
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

}
