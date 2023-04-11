import { Component ,Inject} from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Patient } from 'src/app/Models/database.models';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
import { AddedsnackComponent } from 'src/app/Snackbars/addedsnack/addedsnack.component';
import { PasswordchangeComponent } from 'src/app/Snackbars/passwordchange/passwordchange.component';
import { WrongpasswordComponent } from 'src/app/Snackbars/wrongpassword/wrongpassword.component';

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
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})



export class EditpasswordComponent {
  public showPassword: boolean = false;
  public showPassword1: boolean = false;
  public showPassword2: boolean = false;

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  public togglePasswordVisibility1(): void {
    this.showPassword1 = !this.showPassword1;
  }
  public togglePasswordVisibility2(): void {
    this.showPassword2 = !this.showPassword2;
  }
  editdata:any;
  date:Date=new Date();

  constructor(private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog,private patientService: PatientServicesService) 
  {

  }

  newobj: Patient={
    patientId:this.data.patientId,
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
  newpassword:string='';
  renewpassword:string='';
  passwordsDoNotMatch: boolean = false;
  ngOnInit(): void {
    this.editdata=this.data;

   this.date = new Date(this.editdata.dateOfBirth);
   this.date.setDate(this.date.getDate());
  }

  formdata:any;
  onChange(event:any)
  {
    if (this.newpassword !== this.renewpassword) {
      this.passwordsDoNotMatch = true;
    } else {
      this.passwordsDoNotMatch = false;
    }
  }
  Save(value: any) {
    this.formdata=value
    if(this.formdata.currentpassword ===this.data.password)
    {
      if(this.formdata.newpassword===this.formdata.renewpassword)
      {
        this._snackBar.openFromComponent(PasswordchangeComponent, {
          duration: 2 * 1000,
        });
            this.newobj=this.data;
            this.newobj.patientId = this.data.patientId;
            this.newobj.email = this.data.email;
            this.newobj.password=this.formdata.newpassword;
            this.patientService.updatePatient(this.newobj.email, this.newobj).subscribe({
              next: (response) => {
                this.dialog.closeAll();
              }
          })
      }      
    }
    else
    {
      this._snackBar.openFromComponent(WrongpasswordComponent, {
        duration: 2 * 1000,
      });
    }
  }
}
