import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../domain/Product';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  @Output() selectFilter = new EventEmitter();
  products: Product[];

  constructor(
    private productService: ProductService
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

  filterLess(): void {
    this.getProducts();
    this.products = this.products.filter(prod => prod.wholesalePrice < 4);
    this.filteredProducts();
  }

  filterMore(): void {
    this.getProducts();
    this.products = this.products.filter(prod => prod.wholesalePrice > 4);
    this.filteredProducts();
  }

  allProducts(): void {
    this.getProducts();
    this.filteredProducts();
  }

  filteredProducts() {
    this.selectFilter.emit(this.products);
  }

}
