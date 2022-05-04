import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios'
@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
  
})

export class MyProductComponent implements OnInit {
product:any

  constructor(private http: HttpClient) {
    
   }
  ngOnInit(): void {
    this.getProduct()
    
    }
    getProduct=()=>{
      axios.get(`http://localhost:3000/api/products/getProducts`)
      .then((res)=>{
        console.log("ff",res);
        
      this.product=res.data
      }).catch((err)=>{
        console.log(err)
      })
  }
  
  
}
