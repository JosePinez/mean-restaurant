import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../models/restaurant';

@Injectable()
export class RestaurantsService {
  readonly URL_API = 'http://localhost:3000/api/restaurant';
  selectedRestaurant: Restaurant;
  restaurants: Restaurant[];
  constructor(private http: HttpClient) {
    this.selectedRestaurant = new Restaurant();
   }

  getRestaurants(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get(this.URL_API,httpOptions);
  }
  createRestaurant(restaurant: Restaurant){
    return this.http.post(this.URL_API, restaurant);
  }
  editRestaurant(restaurant: Restaurant){
    return this.http.put(this.URL_API + `/${restaurant._id}`, restaurant);
  }
  deleteRestaurant(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }
}