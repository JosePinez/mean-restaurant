import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { ReservesComponent } from './components/reserves/reserves.component';
import { ContactComponent } from './views/contact/contact.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'reserves', component: ReservesComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
