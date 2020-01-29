import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';


declare var M: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }
  addUser(form: NgForm) {
    if (form.value._id) {
      this.userService.editUser(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          M.toast({ html: 'User updated successfully' });
          this.getUsers();
        });
    } else {
      this.userService.createUser(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          M.toast({ html: 'Restaurant saved successfully' });
          this.getUsers();
        });
    }
  }
  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
        console.log(res);
      });
  }
  editUser(user: User) {
    this.userService.selectedUser = user;
  }
  deleteUser(_id: String) {
    if (confirm('Are you sure you want delete it?')) {
      this.userService.deleteUser(_id)
        .subscribe(res => {
          this.getUsers();
          M.toast({ html: 'Teacher deleted successfully' });
        });
    }
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

}
