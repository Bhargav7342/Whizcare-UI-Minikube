import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Audit } from '../Models/database.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditserviceService {

  baseApiUrl:string=environment.baseApiUrlAudit

  constructor(private http:HttpClient) { }

  AddAudits(audits:Audit):Observable<Audit>
  {
    return this.http.post<Audit>(this.baseApiUrl+'/Audit/AddAudit',audits);
  }

}
