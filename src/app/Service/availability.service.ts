import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Doctor, PhysicianAvailabilityStatus } from '../Models/database.models';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  baseApiUrl:string=environment.baseApiUrlavail;

  constructor(private http:HttpClient) { }

  addDoctor(doctor:any):Observable<Doctor>
  {
    return this.http.post<Doctor>(this.baseApiUrl+'/Doctor/AddDoctor',doctor);
  }

  
  addAvailability(doctorAvailability:PhysicianAvailabilityStatus):Observable<PhysicianAvailabilityStatus>
  {
    return this.http.post<PhysicianAvailabilityStatus>(this.baseApiUrl+'/PhysicianAvailabilityStatus/AddAvailability',doctorAvailability);
  }


  getAllDoctor():Observable<Doctor[]>
  {
    return this.http.get<Doctor[]>(this.baseApiUrl+'/Doctor/GetAllDoctors');
  }

  getAllDoctorbyAvailability(day:string):Observable<Doctor[]>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'Day':day,
    });
    return this.http.get<Doctor[]>(this.baseApiUrl+'/Doctor/GetDoctorsByAvailability',{headers:header});
  }

  getDoctorIdbyEmail(email:string):Observable<Doctor>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'Email':email,
    });
    return this.http.get<Doctor>(this.baseApiUrl+'/Doctor/GetDoctorsByEmail',{headers:header});
  }

  getStatusByDoctorId(doctorId:string):Observable<PhysicianAvailabilityStatus>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'id':doctorId,
    });
    return this.http.get<PhysicianAvailabilityStatus>(this.baseApiUrl+'/PhysicianAvailabilityStatus/GetStatus',{headers:header});
  }

  updateDoctorAvailablity(updatedstatus:PhysicianAvailabilityStatus):Observable<PhysicianAvailabilityStatus>
  {
    return this.http.put<PhysicianAvailabilityStatus>(this.baseApiUrl+'/PhysicianAvailabilityStatus/UpdateAvailability',updatedstatus);
  }
}
