import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Appointment, Patient, PatientIntialCheckup } from '../Models/database.models';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  baseApiUrl:string=environment.baseApiUrl1;
  baseApiUrl2:string=environment.baseApiUrl

  constructor(private http:HttpClient) { }

  getAllAppointmets(datee:string):Observable<Appointment[]>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'date1':datee
    });
    

    return this.http.get<Appointment[]>(this.baseApiUrl+'/Appointment/getappointmentsbyDate',{headers:header});
  }


  AddCheckUpDetails(adddetails:PatientIntialCheckup):Observable<PatientIntialCheckup>
  {
    return this.http.post<PatientIntialCheckup>(this.baseApiUrl+'/PatientCheckUp/AddcheckUpdetails',adddetails);
  }


  getPatientIdbyEmail(Email:string):Observable<Patient>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'email':Email,
    });
    return this.http.get<Patient>(this.baseApiUrl2+'/Patient/GetPatientsByEmail',{headers:header});
  }

  getCheckupInfo(appId:string):Observable<PatientIntialCheckup>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'appointment_id':appId,
    }); 
    return this.http.get<PatientIntialCheckup>(this.baseApiUrl+'/PatientCheckUp/GetCheckUpDetailsByAppointmentId',{headers:header});
  }
}
