import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import 'rxjs/Rx';





@Injectable()
export class GenreService{

  
 


constructor(private http: Http) {
    
  }

  
  getGenre() {
  
     
      let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9cbb6907aa5df1817a29e5956432f34f&language=en-US';
      return this.http.get(url).map(res => res.json()  );
        
              
    
  }

}
