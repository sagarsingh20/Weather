import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { PlacesComponent } from './places/places.component';


const routes: Routes = [{
  path:'', component:WeatherComponent
},{
  path:'places', component:PlacesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
