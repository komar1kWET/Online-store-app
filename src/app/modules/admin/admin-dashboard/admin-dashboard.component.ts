import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../domain/Product';
import {ProductService} from '../../../services/product/product.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AddModalComponent} from '../add-modal/add-modal.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass']
})
export class AdminDashboardComponent implements OnInit {
  @Input() products: Product[];
  displayedColumns: string[] = ['id', 'name', 'url', 'description', 'retailPrice', 'wholesalePrice', 'edit', 'remove'];
  dialogWindow: MatDialogRef<AddModalComponent>;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.postProduct
      .subscribe(allProducts => this.products = allProducts);
  }

  removeProduct(value: Product): void {
    this.products = this.products.filter(item => item !== value);
    this.productService.postProductItem({value: this.products});
  }

  addProduct(newProduct): void {
    newProduct.id = this.products.length + 1;
    this.products.push(newProduct);
  }

  onAddModal() {
    this.dialogWindow = this.dialog.open(AddModalComponent, {
      data: {
        addProduct: this.addProduct,
        products: [...this.products]
      },
      hasBackdrop: true
    });
    this.dialogWindow.afterClosed()
      .subscribe(products => {
        if (!products) {
          return;
        }
        this.products = products;
        this.productService.postProductItem(products);
      });
  }
}
