import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './menu/shop/shop.component';
import { HomeComponent } from './menu/home/home.component';
import { ContactComponent } from './menu/contact/contact.component';
import { AboutComponent } from './menu/about/about.component';
import { DetailComponent } from './menu/detail/detail.component';
import { AllprodComponent } from './menu/allprod/allprod.component';
import { ErroComponent } from './menu/erro/erro.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"shop",
    component:ShopComponent,
    children:[
      {
        path:"detail/:id/:title/:userId/:body",
        // /:id/:title/:body
        component:DetailComponent,
      },
      {
        path:"all",
        component:AllprodComponent,
      },
      {
        path:'',
        redirectTo:"all",
        pathMatch:"full",
      }
    ]
  },
  {
    path:"contact",
    component:ContactComponent,
  },
  {
    path:"about",
    component:AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
