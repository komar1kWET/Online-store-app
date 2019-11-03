import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output() searchProduct = new EventEmitter();
  productCtrl = new FormControl();
  searchedProducts: Observable<Product[]>;
  products: Product[];
  constructor(
    private productService: ProductService,
) {
    this.searchedView();
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

  private _searchProducts(prod: string): Product[] {
    const searchProd = prod.toLowerCase();

    return this.products.filter(product => product.name.toLowerCase().indexOf(searchProd) === 0);
  }

  searchedView() {
    this.searchedProducts = this.productCtrl.valueChanges
      .pipe(
        startWith(''),
        map(product => product ? this._searchProducts(product) : this.products.slice())
      );
  }

  searchProductView() {
    this.searchProduct.emit(this.productCtrl.value);
  }
}
