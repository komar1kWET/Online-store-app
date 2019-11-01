import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Product} from '../../../domain/Product';
import {ProductService} from '../../../services/product/product.service';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  productCtrl = new FormControl();
  filteredProducts: Observable<Product[]>;
  products: Product[];
  constructor(
    private productService: ProductService,
) {
    this.filteredProducts = this.productCtrl.valueChanges
      .pipe(
        startWith(''),
        map(product => product ? this._filterProducts(product) : this.products.slice())
      );
  }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.productService.postProduct
      .subscribe(products => {
        this.products = products;
      });
  }

  private _filterProducts(prod: string): Product[] {
    const filterProd = prod.toLowerCase();

    return this.products.filter(product => product.name.toLowerCase().indexOf(filterProd) === 0);
  }

}
