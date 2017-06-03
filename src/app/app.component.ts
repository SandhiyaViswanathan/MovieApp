
import { Component} from '@angular/core';

import { FavouriteService } from './services/favourite.service';
import { FavouriteComponent } from './favourite/favourite.component';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';




constructor(private favouritecomponent : FavouriteComponent) { }

  


}
