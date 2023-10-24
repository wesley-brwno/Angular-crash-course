import { Component } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {


  public product: ProductRepresentation = {};
  constructor(
    private service: ProductService,
    private router: Router) {
  }

  saveProduct() {
    this.service.createProduct(this.product)
    .subscribe({
      next:(result: ProductRepresentation): void => {
        this.router.navigate(['products']);
        console.log(result);
      }
    });
  }
}
