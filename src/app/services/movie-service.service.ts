import { Injectable } from '@angular/core';
import {Jsonp} from "@angular/http";
import 'rxjs/Rx';





@Injectable()
export class MovieServiceService {

  
 


constructor(private _jsonp: Jsonp) {
    
  }
  page=1;
  
  search(search: string) {
  
     
      let url = 'https://api.themoviedb.org/3/search/movie?api_key=9cbb6907aa5df1817a29e5956432f34f&language=en-US&page='+this.page+'&include_adult=false&query='+search+'&callback=JSONP_CALLBACK';
      return this._jsonp.get(url).map(res => res.json()  );
        
              
    
  }

}
