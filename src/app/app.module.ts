import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Homepage/home/home.component';
import { LandComponent } from './LandingPage/land/land.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { AdminComponent } from './Adminpage/admin/admin.component';
import { DoctorComponent } from './DoctorPage/doctor/doctor.component';
import { NurseComponent } from './Nursepage/nurse/nurse.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AcceptRejectappointmentComponent } from './DoctorPage/accept-rejectappointment/accept-rejectappointment.component';
import { AddDiagnosisComponent } from './DoctorPage/add-diagnosis/add-diagnosis.component';
import {MatInputModule} from '@angular/material/input';
import { PrescriptionComponent } from './DoctorPage/add-prescription/prescription.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { PatientLoginComponent } from './Patient/patient-login/patient-login.component';
import { PatientSignupComponent } from './Patient/patient-signup/patient-signup.component';
import { FormsModule }   from '@angular/forms';
import { PatientDashboardComponent } from './Patient/patient-dashboard/patient-dashboard.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DoctorScheduleComponent } from './Adminpage/doctor-schedule/doctor-schedule.component';
import { PatientslistComponent } from './Adminpage/patientslist/patientslist.component';
import { AddDoctorComponent } from './Adminpage/add-doctor/add-doctor.component';
import { AvailabilityComponent } from './Adminpage/availability/availability.component';
import { InitialcheckupComponent } from './Nursepage/initialcheckup/initialcheckup.component';
import { AppointmentsfortodayComponent } from './DoctorPage/appointmentsfortoday/appointmentsfortoday.component';
import { HealthhistoryComponent } from './Patient/healthhistory/healthhistory.component';
import { ViewPrescriptionComponent } from './Patient/view-prescription/view-prescription.component';
import { ViewCheckUpComponent } from './Patient/view-check-up/view-check-up.component';
import { AppointmenthistoryComponent } from './Patient/appointmenthistory/appointmenthistory.component';
import { CustomdatePipe } from './customdate.pipe';
import { BookappointmentsComponent } from './Patient/bookappointments/bookappointments.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddAvailabilityComponent } from './Adminpage/add-availability/add-availability.component';
import { ViewprofileComponent } from './Patient/viewprofile/viewprofile.component';
import { EditprofileComponent } from './Patient/editprofile/editprofile.component';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { EditpasswordComponent } from './Patient/editpassword/editpassword.component';
import { HealthHistoryNurseComponent } from './Nursepage/health-history-nurse/health-history-nurse.component';
import { AgePipePipe } from './age-pipe.pipe';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewPrescriptionDocComponent } from './DoctorPage/view-prescription-doc/view-prescription-doc.component';
import { ViewHealthHistoryDocComponent } from './DoctorPage/view-health-history-doc/view-health-history-doc.component';
import { SuccessfullloginsnackComponent } from './Snackbars/successfullloginsnack/successfullloginsnack.component';
import { AddedsnackComponent } from './Snackbars/addedsnack/addedsnack.component';
import { AppointmentacceptedComponent } from './Snackbars/appointmentaccepted/appointmentaccepted.component';
import { AppointmentrejectedComponent } from './Snackbars/appointmentrejected/appointmentrejected.component';
import { SuccessComponent } from './Snackbars/success/success.component';
import { PasswordchangeComponent } from './Snackbars/passwordchange/passwordchange.component';
import { WrongpasswordComponent } from './Snackbars/wrongpassword/wrongpassword.component';
import { BookedComponent } from './Snackbars/booked/booked.component';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandComponent,
    AdminComponent,
    DoctorComponent,
    NurseComponent,
    AcceptRejectappointmentComponent,
    AddDiagnosisComponent,
    PrescriptionComponent,
    PatientLoginComponent,
    PatientSignupComponent,
    PatientDashboardComponent,
    DoctorScheduleComponent,
    PatientslistComponent,
    AddDoctorComponent,
    AvailabilityComponent,
    InitialcheckupComponent,
    AppointmentsfortodayComponent,
    HealthhistoryComponent,
    ViewPrescriptionComponent,
    ViewCheckUpComponent,
    AppointmenthistoryComponent,
    CustomdatePipe,
    BookappointmentsComponent,
    AddAvailabilityComponent,
    ViewprofileComponent,
    EditprofileComponent,
    EditpasswordComponent,
    ViewPrescriptionDocComponent,
    HealthHistoryNurseComponent,
    AgePipePipe,
    ViewHealthHistoryDocComponent,

    SuccessfullloginsnackComponent,
      AddedsnackComponent,
      AppointmentacceptedComponent,
      AppointmentrejectedComponent,
      SuccessComponent,
      PasswordchangeComponent,
      WrongpasswordComponent,
      BookedComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-2fhrarubg5yn6myf.us.auth0.com',
      clientId: 'ssnUSkOdAhEaR8BfKnaxyV3TewUN89WU',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatMomentDateModule,
    MatSnackBarModule,
    MatBadgeModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
