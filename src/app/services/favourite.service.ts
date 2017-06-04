import { Injectable } from '@angular/core';
import{Http,Response, Headers, RequestOptions}from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';





@Injectable()
export class FavouriteService {

 
constructor(private http: Http) { }
 
//posting the favourite 
  
      postfavourite(data)  { 
            console.log("In service");
            let url = "http://localhost:3000/api/bear/";
            let encoded_data = JSON.stringify(data);
            console.log("Stringified");
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            
            let options = new RequestOptions({ headers: headers });

            return this.http.post(url,encoded_data,options).map(()=>console.log('sucess')); 
        
      }

//getting the favourite llist


      getfavourite()
      {
        console.log("service fav")
            let url = "http://localhost:3000/api/bear/";
            return this.http.get(url).map(res => res.json()  );
      }

//Deleting the favourite llist

      deletefavourite(id: number )
      
      {
        console.log("service fav")
        console.log(id)
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
          
              
            let options = new RequestOptions({ headers: headers });
            let url = "http://localhost:3000/api/bear";
            return this.http.delete(`${url}/${id}`).map(res => res.json(),
            () => console.log('deleted'),
            );       

      }

//Updating the favourite part
      updatefavourite(data)
      {
        console.log(data.id)
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          let body = JSON.stringify(data);
          let url = "http://localhost:3000/api/bear";
            return this.http.put(`${url}/${data.id}`,data,headers).map(res => res.json(),
            () => console.log('Updated'),
            );       
      }
    
  }





