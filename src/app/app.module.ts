import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { AppRouting } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { MovieServiceService } from './services/movie-service.service';
import { GenreService } from './services/genre.service';
import { MoviesComponent } from './movies/movies.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { FavouriteComponent } from './favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FavouriteComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     JsonpModule,
     AppRouting,
     InfiniteScrollModule
  ],
  providers: [MovieServiceService,GenreService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
