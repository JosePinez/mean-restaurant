import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { NgForm } from '@angular/forms';
import { Restaurant } from 'src/app/models/restaurant';

declare var M: any;
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantsService]
})
export class RestaurantsComponent implements OnInit {

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.getRestaurants();
  }
  addRestaurant(form: NgForm) {
    if (form.value._id) {
      this.restaurantService.editRestaurant(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          M.toast({ html: 'Restaurant updated successfully' });
          this.getRestaurants();
        })
    } else {
      this.restaurantService.createRestaurant(form.value)
        .subscribe(res => {
          console.log(res);
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
        console.log(res);
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
