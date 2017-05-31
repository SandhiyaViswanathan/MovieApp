import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../services/movie-service.service';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = 'app works!';
  searchString : string;
  searchResults: Array<Object>; 
  genreResults = [];
  totalpage : number;
  scrolldistance=50000;
  throttle=20;
  page=1;
  

  constructor(private movieserviceservice: MovieServiceService, private genreservice : GenreService) { }
  
  SearchMovies()
  {
        this.movieserviceservice.search(this.searchString).subscribe(res => {this.searchResults = res.results; this.totalpage=res.total_pages;});
        
        this.genreservice.getGenre().subscribe(data => {this.genreResults = data.genres;});
        
  


}




genreMethod(val)
{
  let arr=[];
  this.genreResults.forEach(function(a)
  {
    if(val.includes(a.id))
    {
      arr.push(a.name);
    }
  
  });
  return arr;

}

onScroll (searchString) {
  if(this.movieserviceservice.page<=this.totalpage){
      this.movieserviceservice.page++;
        console.log('scrolled!!');
         this.movieserviceservice.search(searchString)
        .subscribe(
            data=> {data.results.forEach((elem) => {
              this.searchResults.push(elem);
            })},
            error=>alert(error),
            ()=>console.log("finished")
      );
        
   }
}


  ngOnInit() 
  {
  }

}


