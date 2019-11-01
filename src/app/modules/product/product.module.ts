import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {PriceDetailComponent} from './price-detail/price-detail.component';
import {AppRoutingModule} from '../../app-routing.module';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatTooltipModule} from '@angular/material';
import {SearchComponent} from './search/search.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    PriceDetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTooltipModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule
  ]
})
export class ProductModule { }
