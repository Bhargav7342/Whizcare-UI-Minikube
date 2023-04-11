import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HealthHistory } from 'src/app/Models/database.models';
import { ViewCheckUpComponent } from 'src/app/Patient/view-check-up/view-check-up.component';
import { ViewPrescriptionComponent } from 'src/app/Patient/view-prescription/view-prescription.component';
import { PatientServicesService } from 'src/app/Service/patient-services.service';

@Component({
  selector: 'app-view-health-history-doc',
  templateUrl: './view-health-history-doc.component.html',
  styleUrls: ['./view-health-history-doc.component.css']
})
export class ViewHealthHistoryDocComponent implements OnInit{
  patientId:string="";
  fromOut:boolean=false;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogbox: MatDialog,private hhservices:PatientServicesService,private router:Router)
  {
    this.patientId=this.data.dataKey.pId
    
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
  
}
}
