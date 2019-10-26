import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {PRODUCTS} from '../products-mock';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products);
  }

}
