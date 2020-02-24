import { Component, OnInit } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';
import { NgForm } from '@angular/forms';
import { Reserve } from 'src/app/models/reserve';
import { UsersService} from '../../services/users.service';
import { Restaurant} from '../../models/restaurant';
import { RestaurantsService} from '../../services/restaurants.service';

declare var M: any;
@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css'],
  providers: [ReservesService, RestaurantsService]
})
export class ReservesComponent implements OnInit {
  public identity = null;
  public token = null;
  constructor(private reserveService: ReservesService, private userService: UsersService, private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.getReserves();
    this.getRestaurants();
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }
  getRestaurants() {
    this.restaurantService.getRestaurants()
      .subscribe(res => {
        this.restaurantService.restaurants = res as Restaurant[];
      })
  }

  addReserve(form: NgForm) {
    if (form.value._id) {
      this.reserveService.editReserve(form.value)
        .subscribe(res => {
          this.resetForm();
          M.toast({ html: 'Reserved completed' });
          this.getReserves();
        });
    } else {
      this.reserveService.createReserve(form.value)
        .subscribe(res => {
          this.resetForm();
          M.toast({ html: 'Reserved completed'});
          this.getReserves();
        });
    }

  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.reserveService.selectedReserve = new Reserve();
    }
  }
  getReserves() {
    this.reserveService.getReserves()
      .subscribe(res => {
        this.reserveService.reserves = res as Reserve[];
      });
  }
  editReserve(reserve: Reserve) {
    this.reserveService.selectedReserve = reserve;
  }
  deleteReserve(_id: String) {
    if (confirm('Are you sure want delete it?')) {
      this.reserveService.deleteReserve(_id)
        .subscribe(res => {
          this.getReserves();
          M.toast({ html: 'Reserve deleted successfully' });
        });
    }
  }
}
