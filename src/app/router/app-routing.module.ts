
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "../movies/movies.component";
import { FavouriteComponent } from "../favourite/favourite.component";


const APP_ROUTES: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'home', component: MoviesComponent},
  {path:'favourite', component: FavouriteComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
