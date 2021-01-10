import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './menu/shop/shop.component';
import { HomeComponent } from './menu/home/home.component';
import { ContactComponent } from './menu/contact/contact.component';
import { AboutComponent } from './menu/about/about.component';
import { DetailComponent } from './menu/detail/detail.component';
import { AllprodComponent } from './menu/allprod/allprod.component';
import { ErroComponent } from './menu/erro/erro.component';
import { ErroparentComponent } from './erro/erro.component';
import { SearchComponent } from './menu/search/search.component';
import { FilterComponent } from './menu/filter/filter.component';

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
        path:"detail/:id",
        component:DetailComponent,
      },
      {
        path:"all",
        component:AllprodComponent,
      },
      {
        path:"search/:id",
        component:SearchComponent,
      },
      {
        path:"filter/:min/:max",
        component:FilterComponent,
      },
      {
        path:'',
        redirectTo:"all",
        pathMatch:"full",
      },
      {
        path:"**",
        component:ErroComponent,
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
  },
  {
    path:"**",
    component:ErroparentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
