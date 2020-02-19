import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reserve } from '../models/reserve';


@Injectable({
  providedIn: 'root'
})
export class ReservesService {

  readonly URL_API = 'http://localhost:3000/api/reserve';
  public selectedReserve: Reserve;
  public reserves: Reserve[];
  constructor(private http: HttpClient) {
    this.selectedReserve = new Reserve();
  }
  getReserves() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get(this.URL_API,httpOptions);
  }
  createReserve(reserve: Reserve) {
    return this.http.post(this.URL_API, reserve);
  }
  editReserve(reserve: Reserve) {
    return this.http.put(this.URL_API + `/${reserve._id}`, reserve);
  }
  deleteReserve(_id: String) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
