import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {

  constructor(private dailog:MatDialogRef<PrescriptionComponent>){}
  
  
  addPre(item:any){
    this.dailog.close({data:item});
  }
}
