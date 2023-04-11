import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Appointment, Doctor, HealthHistory, Prescription } from '../Models/database.models';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseApiUrlPat:string=environment.baseApiUrl;
  baseApiUrl:string=environment.baseApiUrlavail;
  baseApiurl2:string=environment.baseApiUrl1

  constructor(private http:HttpClient) { }

  getDoctorDetails(email:string):Observable<Doctor>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'Email':email
    });

    return this.http.get<Doctor>(this.baseApiUrl+'/Doctor/GetDoctorsByEmail',{headers:header})
  }


  getAllAppointmetsBydoctorandstatus(Id:string ,status:string):Observable<Appointment[]>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'id':Id,
      'status':status
    });
    

    return this.http.get<Appointment[]>(this.baseApiurl2+'/Appointment/getappointmentsbyDoctoridAndStatus',{headers:header});
  }
  
  GetAppointmentsAfterCheckup(date:string,docId:string):Observable<Appointment[]>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'doc_id':docId,
      'dates':date
    });
    return this.http.get<Appointment[]>(this.baseApiurl2+'/Appointment/GetAppointmentsAfterCheckup',{headers:header})
  }
  
  AddHealthHistory(diagnosis:HealthHistory):Observable<HealthHistory>
  {
    return this.http.post<HealthHistory>(this.baseApiUrlPat+'/HealthHistory/HealthHistory_Add',diagnosis);
  }

  AddPrescription(prescription:Prescription):Observable<Prescription>
  {
    return this.http.post<Prescription>(this.baseApiUrlPat+'/Prescriptions/Prescription_Add',prescription);
  }
}
