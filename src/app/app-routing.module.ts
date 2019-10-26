import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'detail/:id', component: ProductDetailComponent},
  { path: 'main', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
