import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
   httpOptionsPlain = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    }),
    'responseType': 'text'
  };
  apiKey = 'AIzaSyB5UGmAdtMiKB7To_5VRvsFYSRfdo9qQfY';
  constructor(
    private http: HttpClient,
  ) { }

  getlongLat(obj): Observable<any> {
  //  return this.http.get<any>('https://maps.googleapis.com/maps/api/geocode/json', {
  //    params: {
  //      address: 'Mangalore',
  //      key: 'AIzaSyB5UGmAdtMiKB7To_5VRvsFYSRfdo9qQfY'
  //    }
  //  }
  //  )
  return this.http.get<any>('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=28.7041&longitude=77.1025&localityLanguage=en');
  }
}
