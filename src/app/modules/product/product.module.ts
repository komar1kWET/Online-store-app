import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {PriceDetailComponent} from './price-detail/price-detail.component';
import {AppRoutingModule} from '../../app-routing.module';
import {MatTooltipModule} from '@angular/material';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    PriceDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTooltipModule,
  ]
})
export class ProductModule { }
