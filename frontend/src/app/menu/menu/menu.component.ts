import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../services/users.service';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }
  
  ngOnInit() {
  }


}
