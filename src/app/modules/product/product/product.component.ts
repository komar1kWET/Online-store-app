import { Component, OnInit,  } from '@angular/core';
import {ProductService} from '../../../services/product/product.service';
import {Router} from '@angular/router';
import {Product} from '../../../domain/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.postProduct
      .subscribe(products => {
        this.products = products;
      });
  }

  goToPriceDetail(id: number) {
    this.router.navigate([`/price-detail/${id}`]);
    return false;
  }

}
