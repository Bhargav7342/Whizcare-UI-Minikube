import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allergy } from '../Models/database.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AllergyService {
  baseApiUrl:string=environment.baseApiUrlallergy

  constructor(private http:HttpClient) { }



  AddAllergydetails(addallergies:Allergy):Observable<Allergy>
  {
    return this.http.post<Allergy>(this.baseApiUrl+'/Allergy/AddAllergies',addallergies);
  }

  getAllAllergy(appid:string):Observable<Allergy[]>{
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'appointmentid':appid,
    });
    return this.http.get<Allergy[]>(this.baseApiUrl+'/Allergy/GetAllAllergy',{headers:header})
  }
}
