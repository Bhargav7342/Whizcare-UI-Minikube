import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AdminComponent } from './Adminpage/admin/admin.component';
import { AcceptRejectappointmentComponent } from './DoctorPage/accept-rejectappointment/accept-rejectappointment.component';
import { DoctorComponent } from './DoctorPage/doctor/doctor.component';
import { PrescriptionComponent } from './DoctorPage/add-prescription/prescription.component';
import { HomeComponent } from './Homepage/home/home.component';
import { LandComponent } from './LandingPage/land/land.component';
import { NurseComponent } from './Nursepage/nurse/nurse.component';
import { PatientLoginComponent } from './Patient/patient-login/patient-login.component';
import { PatientSignupComponent } from './Patient/patient-signup/patient-signup.component';
import { PatientDashboardComponent } from './Patient/patient-dashboard/patient-dashboard.component';
import { InitialcheckupComponent } from './Nursepage/initialcheckup/initialcheckup.component';
import { AddDiagnosisComponent } from './DoctorPage/add-diagnosis/add-diagnosis.component';
import { AppointmentsfortodayComponent } from './DoctorPage/appointmentsfortoday/appointmentsfortoday.component';
import { BookappointmentsComponent } from './Patient/bookappointments/bookappointments.component';
import { ViewPrescriptionComponent } from './Patient/view-prescription/view-prescription.component';
import { HealthhistoryComponent } from './Patient/healthhistory/healthhistory.component';
import { AddAvailabilityComponent } from './Adminpage/add-availability/add-availability.component';
import { AvailabilityComponent } from './Adminpage/availability/availability.component';
import { HealthHistoryNurseComponent } from './Nursepage/health-history-nurse/health-history-nurse.component';
import { ViewHealthHistoryDocComponent } from './DoctorPage/view-health-history-doc/view-health-history-doc.component';

const routes: Routes = [
  {
    path:"landed",
    component:LandComponent
  },
  {
    path:"admin",
    component:AdminComponent,canActivate:[AuthGuard]
  },
  {
    path:"doctor",
    component:DoctorComponent,canActivate:[AuthGuard]
  },
  {
    path:'nurse',
    component:NurseComponent,canActivate:[AuthGuard]
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"presc",
    component:PrescriptionComponent
  },
  {
    path:"plogin",
    component:PatientLoginComponent
  },
  {
    path:"psignup",
    component:PatientSignupComponent
  },
  {
    path:"patientdashboard",
    component:PatientDashboardComponent
  },
  {
    path:"addcheck",
    component:InitialcheckupComponent
  },
  {
    path:"adddiagnosis",
    component:AddDiagnosisComponent
  },
  {
    path:"appToday",
    component:AppointmentsfortodayComponent
  },
  {
    path:"book",
    component:BookappointmentsComponent
  },
  {
    path:"viewpre",
    component:ViewPrescriptionComponent
  },
  {
    path:"healthhistory",
    component:HealthhistoryComponent
  },
  {
    path:"availability",
    component:AvailabilityComponent
  },
  {
    path:"pendingAppointments",
    component:AcceptRejectappointmentComponent
  },
  {
    path:"healthHistoryNurse",
    component:HealthHistoryNurseComponent
  },
  {
    path:"NurseHomePage",
    component:NurseComponent
  },
  {
    path:"healthHistoryDoctor",
    component:ViewHealthHistoryDocComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
