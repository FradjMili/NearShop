import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
http:HttpClient
  constructor(private httpClient: HttpClient) { 
    this.http = httpClient
  }

  AddProduct(title:String , description :String , price :String ,quantite:number,image_url:String,Longitude: Number, Latiude: Number )
  {
      const body ={
        title,
        description,
        price,
        quantite,
        image_url,
        Longitude,
        Latiude
      
        
      };
console.log(body);

      return this.http.post(`http://localhost:3000/api/products/addproduct`,body)

  }
}
