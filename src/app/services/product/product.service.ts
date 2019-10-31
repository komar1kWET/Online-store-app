import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Product} from '../../domain/Product';
import {PRODUCTS} from '../../mock-data/products-mock';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = PRODUCTS;
  postProduct = new BehaviorSubject(this.products);

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    return this.postProduct.pipe(map(product => product.find(item => item.id === id)));
  }

  postProductItem(item) {
    this.postProduct.next(item.value);
  }
}
