import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly URL_API = 'http://localhost:3000/api/user';
  selectedUser: User;
  users: User[];


  constructor(private http: HttpClient) {
    this.selectedUser = new User();
  }
  getUsers() {
    return this.http.get(this.URL_API);
  }
  createUser(user: User) {
    return this.http.post(this.URL_API, user);
  }
  editUser(user: User) {
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }
  deleteUser(_id: String) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
