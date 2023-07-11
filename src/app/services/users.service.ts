import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl:string='https://reqres.in/api/';

  constructor(private http:HttpClient) { }

getUsersList(){

 return this.http.get(this.baseUrl+"users");

}


getUserById(userId:number){
  return this.http.get(this.baseUrl+"users/"+userId);
}


postInsertUser(userData:any){
  return this.http.post(this.baseUrl+'users',userData);
}


}
