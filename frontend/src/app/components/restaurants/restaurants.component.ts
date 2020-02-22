import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { NgForm } from '@angular/forms';
import { Restaurant } from 'src/app/models/restaurant';
import { UsersService} from '../../services/users.service';

declare var M: any;
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantsService]
})
export class RestaurantsComponent implements OnInit {
  public identity = null;
  public token = null;
  constructor(private restaurantService: RestaurantsService,private userService: UsersService) { }


  ngOnInit() {
    this.getRestaurants();
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();   
       
  } 
  collapse(){
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems,{
        accordion: false
      });
  } 
  addRestaurant(form: NgForm) {
    if (form.value._id) {
      this.restaurantService.editRestaurant(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Restaurant updated successfully' });
          this.getRestaurants();
        });
    } else {
      this.restaurantService.createRestaurant(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Restaurant saved successfully' });
          this.getRestaurants();
        });
    }
  }

  getRestaurants() {
    this.restaurantService.getRestaurants()
      .subscribe(res => {
        this.restaurantService.restaurants = res as Restaurant[];
      })
  }
  editRestaurant(restaurant: Restaurant) {
    this.restaurantService.selectedRestaurant = restaurant;
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.restaurantService.selectedRestaurant = new Restaurant();
    }
  }
  deleteRestaurant(_id: string) {
    if (confirm('Are you sure you want delete it?')) {
      this.restaurantService.deleteRestaurant(_id)
        .subscribe(res => {
          this.getRestaurants();
          M.toast({ html: 'Restaurant deleted successfully' })
        })
    }
  }
  
}
