import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutUsComponent } from "./about-us/about-us.component";
import { HomePageComponent } from './home-page/home-page.component';
import { MyProductComponent } from './my-product/my-product.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'AddProduct',component:AddProductComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'myProduct',component:MyProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
