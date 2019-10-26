import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from './Product';
import {PRODUCTS} from './products-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAllProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }
}
