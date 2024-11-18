import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  api='https://api.sampleapis.com/coffee/hot'

  constructor(private http:HttpClient) { }
  CallApi(){
    return this.http.get(this.api)
  }
  
}
