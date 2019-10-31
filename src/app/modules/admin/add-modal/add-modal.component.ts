import {Component, Inject, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../domain/Product';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {of} from 'rxjs';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.sass']
})
export class AddModalComponent implements OnInit {

  @Input() products: Product[];
  private addForm: FormGroup;
  product = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogWindow: MatDialogRef<AddModalComponent>
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.addForm = new FormGroup({
      url: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      retailPrice: new FormControl('', [Validators.required]),
      wholesalePrice: new FormControl('', [Validators.required]),
    });
  }

  get url(): AbstractControl {
    return this.addForm.get('url');
  }

  get name(): AbstractControl {
    return this.addForm.get('name');
  }

  get description(): AbstractControl {
    return this.addForm.get('description');
  }

  get retailPrice(): AbstractControl {
    return this.addForm.get('retailPrice');
  }

  get wholesalePrice(): AbstractControl {
    return this.addForm.get('wholesalePrice');
  }

  createNewProduct() {
    const obj = {
      url: this.url.value,
      name: this.name.value,
      description: this.description.value,
      retailPrice: this.retailPrice.value,
      wholesalePrice: this.wholesalePrice.value,
    };
    this.data.addProduct(obj);
    this.dialogWindow.close(of(this.data.products));
  }

}
