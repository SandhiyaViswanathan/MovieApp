import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../services/favourite.service';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

   genreResults = [];

  constructor(private favouriteservice : FavouriteService,private genreservice : GenreService){
    
    this.favouriteservice.getfavourite().subscribe(res => {this.getResults = res})

     this.genreservice.getGenre().subscribe(data => {this.genreResults = data.genres;});
  } 

  getResults=[];

  postfav(id,title,poster_path,average,overview,releasedate,genreid)
  {
    let obj={id,title,poster_path,average,overview,releasedate,genreid};
  //  console.log(obj);

   this.favouriteservice.postfavourite(obj).subscribe(


        
           (data) => console.log('posted!!')     // complete;
   );


  }

  //genre method

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

 deletefav(id)
  {
    
    console.log(id);

   this.favouriteservice.deletefavourite(id).subscribe(

          
        
          data => { this.getResults = data},
      error => { },
      () => { }
   );


  }

 
  


  
  ngOnInit() {
  }



}
