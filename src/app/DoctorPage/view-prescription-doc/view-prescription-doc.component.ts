import { Component,Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Prescription } from 'src/app/Models/database.models';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
@Component({
  selector: 'app-view-prescription-doc',
  templateUrl: './view-prescription-doc.component.html',
  styleUrls: ['./view-prescription-doc.component.css']
})
export class ViewPrescriptionDocComponent implements OnInit {
  prescription:any[]=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit(): void {
    this.prescription=this.data.datakey;
    this.dataSource=this.prescription
  }
  @ViewChild(MatTable) table: MatTable<Prescription> | undefined;
  displayedColumns: string[] = ['Medication', 'Dosage', 'Note','delete'];
  dataSource=this.prescription;
  
  removep(item:any)
  {
      this.prescription.splice(this.prescription.indexOf(item),1);
      this.table?.renderRows();
  }
}
