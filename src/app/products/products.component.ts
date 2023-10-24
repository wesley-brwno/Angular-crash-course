import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representations';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  public products: Array<ProductRepresentation> = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllProducts(10).subscribe({
      next: (responseObj) => {
        this.products = responseObj;
      }
    })
  }
}
