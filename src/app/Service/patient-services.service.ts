import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HealthHistory, Patient, Prescription } from '../Models/database.models';
@Injectable({
  providedIn: 'root'
})
export class PatientServicesService {

  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  patientRegister(addPatient:Patient):Observable<Patient>
  {
    return this.http.post<Patient>(this.baseApiUrl+'/Patient/Register_Patient',addPatient);
  }

  patientLogin(email:string,password:string):Observable<Patient>
  {
    let headers=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'email':email,
      'pass':password
    });
    return this.http.get<Patient>(this.baseApiUrl+'/Patient/SignIn_Patient',{headers:headers});
  }

  getAllPatient():Observable<Patient[]>
  {
    return this.http.get<Patient[]>(this.baseApiUrl+'/Patient/GetAllPatients');
  }

  getPatientById(patientId:string):Observable<Patient>{
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'Id':patientId
    });
    return this.http.get<Patient>(this.baseApiUrl+'/Patient/GetAllPatientsById',{headers:header});
    
  }
  updatePatient(email: string, updatedData: Patient):Observable<Patient>{
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'Email' : email
    });
    return this.http.put<Patient>(this.baseApiUrl+'/Patient/Update_Patient', updatedData, {headers:header} );
  }

  getHealthHistorybyPatientId(pid:string):Observable<HealthHistory[]>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'patientId' : pid
    });
    return this.http.get<HealthHistory[]>(this.baseApiUrl+'/HealthHistory/GetHistory',{headers:header});
  }
  getPrescriptionByHHID(hhid:string):Observable<Prescription[]>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'hhId' : hhid
    });
    return this.http.get<Prescription[]>(this.baseApiUrl+'/Prescriptions/Get_Prescription',{headers:header});
  }
}
