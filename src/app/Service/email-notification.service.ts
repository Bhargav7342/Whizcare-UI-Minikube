import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmailNotificationService {

  baseApiUrl:string=environment.baseApiUrl1;

  constructor(private http:HttpClient) { }

  sendEmail(email:string,date:string,status:string):Observable<string>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'Email':email,
      'date1':date,
      'status':status
    });
    return this.http.get<string>(this.baseApiUrl+'/Appointment/Email_Notification',{headers:header});
  }
}
