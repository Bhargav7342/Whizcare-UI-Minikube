import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prescription } from 'src/app/Models/database.models';
import { PatientServicesService } from 'src/app/Service/patient-services.service';

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.css']
})
export class ViewPrescriptionComponent implements OnInit{

  prescription:Prescription[]=[];
  hhid:string|any='';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private preservices:PatientServicesService){}
  ngOnInit(): void {
    this.hhid=this.data.dataKey
    this.preservices.getPrescriptionByHHID(this.hhid).subscribe({
      next:(response)=>{
        this.prescription=response
        this.dataSource=this.prescription
      }
    })
  }
   
  displayedColumns: string[] = ['Medication', 'Dosage', 'Note'];
  dataSource=this.prescription
}
