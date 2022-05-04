import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios'
@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
  
})

export class MyProductComponent implements OnInit {
product:any
private url='http://localhost:3000/api/products'
  constructor(private httpClient: HttpClient) {
    
   }
  ngOnInit(): void {
    this.getProduct(),
    this.deleteProduct
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
  deleteProduct(id:number){
    console.log(typeof(id),'hello')
    let ID=id
    axios.delete(`http://localhost:3000/api/products/deleteProduct/`+ID).then((res)=>{
      console.log(res)
        window.location.reload();
    }).catch((err)=>{
      console.log(err)
    })
    // return this.httpClient.delete(this.url+'/deleteProduct'+id);
  }
  
}
