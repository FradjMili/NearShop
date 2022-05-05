import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as mapboxgl from 'mapbox-gl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
  
})

export class MyProductComponent implements OnInit {
product:any
closeResult = '';
mapbox = {
  accessToken: 'pk.eyJ1IjoibWlsaWZyYWoiLCJhIjoiY2ttdGs1aTIxMHNkNTJwczEwYjhvMnRpNSJ9.iK6jtPrKF5BlQbsIOf2aRg',
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
private url='http://localhost:3000/api/products'
  constructor(private httpClient: HttpClient,private modalService: NgbModal,private router:Router ) {
    
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
  open(event:any,content :any) {

    console.log(event)
     this.modalService.open(content,
        {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
           this.closeResult = `Closed with: ${result}`;
         }, (reason) => {
           this.closeResult = 
              `Dismissed ${this.getDismissReason(reason)}`;
         });
  
  
         (mapboxgl as typeof mapboxgl).accessToken
         = this.mapbox.accessToken;
         let map = new mapboxgl.Map({
         container: 'map',
         style: 'mapbox://styles/mapbox/streets-v11',
         zoom: 10,
         center: [event.Longitude, event.Latiude],
       });

      new mapboxgl.Marker().setLngLat([event.Longitude, event.Latiude]).addTo(map);
       
    
    


    
  }
  update(product:any){
   
    localStorage.setItem("id",product._id )
    localStorage.setItem("title",product.title )
    localStorage.setItem("description",product.description )
    localStorage.setItem("price",product.price )
    localStorage.setItem("quantite",product.quantite )
    this.router.navigate(['/AddProduct']);
    console.log(product.Description)
    
  }
}
