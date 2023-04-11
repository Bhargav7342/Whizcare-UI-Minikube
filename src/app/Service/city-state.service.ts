import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityStateService {

  constructor(private http:HttpClient) { }
  getlocation(pincode:string):Observable<any>
  {
    return this.http.get<any>(
      'https://api.postalpincode.in/pincode/' + pincode
    );
  }
}
