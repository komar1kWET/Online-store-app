import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../domain/Product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../services/product/product.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.sass']
})
export class EditModalComponent implements OnInit {
  @Input() product: Product;
  constructor(
    private productService: ProductService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
}
