import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data:any= []
      amount:any= 0
         search: any =""
  constructor() { }

  ngOnInit(): void {
    
  }
  filtredProduct (){
    return this.data.filter((element:any)=>{
      return element.title.match(this.search)
    })
  }

}
