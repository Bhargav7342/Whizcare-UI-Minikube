import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Patient } from 'src/app/Models/database.models';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
import { EditpasswordComponent } from '../editpassword/editpassword.component';
import { EditprofileComponent } from '../editprofile/editprofile.component';
// import { EditPageComponent } from '../edit-page/edit-page.component';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  
  
  @Input() patientId:string|null=''; 
  pid:string|any='';
  signupobj: Patient={
    patientId:'',
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phone:'',
    gender:'',
    dateOfBirth:'',
    city:'',
    state:'',
    zipcode:'',
    bloodGroup:''
  };
  constructor(public dialog: MatDialog, private patientService : PatientServicesService) {}

  ngOnInit(): void {
    this.pid=this.patientId;
    this.patientService.getPatientById(this.pid).subscribe({
      next:(response)=>{
        this.signupobj = response;
      }
    })

  }
  

  editprofile(){
    this.dialog.open(EditprofileComponent, {
      height:'500px',
      width:'50%',
      data: this.signupobj,
    
    });
  }

  editpassword(){
    this.dialog.open(EditpasswordComponent,{
      height:'350px',
      width:'30%',
      data: this.signupobj,
    });
  }
  
}
