import { Component } from '@angular/core';
import { User } from './models/user';
import { UsersService } from './services/users.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  public title = 'Restaurant App';
  public user: User;
  public identity;
  public token;
  ngOnInit(){
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }
  constructor(private userService: UsersService, private router: Router) {
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }
  logOut(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this.router.navigate(['/']);
    M.toast({html: 'Logout successfully, thanks for your visit'});
  }
  public onSubmitLogin(form: NgForm) {
    const params = {
      email: form.value.email,
      password: form.value.password,
      gethash: true
    }

    this.userService.signUp(form.value)
      .subscribe(
        response => {
          const identity = response['user'];
          this.identity = identity;
          if (this.token != null) {
            M.toast({ html: 'Ok login' });
          } else {
            localStorage.setItem('identity', JSON.stringify(identity));
            //Get token
            this.userService.signUp(params)
              .subscribe(
                res => {
                  const token = res['token'];
                  this.token = token;
                  if (this.token.length <= 0) {
                    M.toast({ html: 'Error login' });
                  } else {
                    localStorage.setItem('token', token);
                    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
                  }
                }, err => {
                  M.toast({ html: 'Not login' });
                }
              );
          }
          M.toast({ html: 'Login successfully' });
        },
        error =>{
          M.toast({html: 'Not login'});
        }
      );
  }
}
