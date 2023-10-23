import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  param: any;
  queryParam: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private service: ProductService
  ){}

  ngOnInit(): void {
    console.log(this.activateRoute);
    this.param = this.activateRoute.snapshot.params['username'];
    this.queryParam = this.activateRoute.snapshot.queryParams['course'];

    this.service.getAllProducts()
    .subscribe({
      next: (data) => {
       // console.log(data);
        data[0].category;
      }
    });

    const product: ProductRepresentation = {
      title: 'My Product',
      description: 'Product description',
      price: 12,
      category: 'Any category',
      image: 'https://some-image-png'
    }

    this.service.createProduct(product)
      .subscribe({
        next: (result) => 
        console.log(result)
      });
  }
}
