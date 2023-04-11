import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Models/database.models';
import { PatientServicesService } from 'src/app/Service/patient-services.service';

@Component({
  selector: 'app-patientslist',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientslistComponent implements OnInit  {
  patients:Patient[]=[];
  constructor(private patientService:PatientServicesService){}
  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe({
      next:(response)=>{
        this.patients=response
        this.dataSource = this.patients;
      },
      error:(e)=>
      {
        window.alert("No Patients Available")
      }
    })

  }
  displayedColumns: string[] = ['Name', 'Email','Phone', 'Date of Birth', 'Gender'];
  dataSource = this.patients;
  
  
}
