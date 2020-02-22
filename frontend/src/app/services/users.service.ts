import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { GLOBAL } from './global';



@Injectable()
export class UsersService {
  public url: string;
  public identity;
  public token;

  constructor(private http: HttpClient){
    this.url = GLOBAL.url;
  }
  signUp(params){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.url + 'user/login',params,httpOptions);
  }
  register(params){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.url + 'user/register', params, httpOptions);
  }

  getIdentity(){
    const identity = JSON.parse(localStorage.getItem('identity'));
    if(identity != "undefined"){
      this.identity = identity;
    }else{
      this.identity = null;
    }
    return this.identity;
  }
  getToken(){
    const token = localStorage.getItem('token');
    if(token != "undefined"){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }
}
