import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representations';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(limit: number = 5): Observable<ProductRepresentation[]> {
    const productsUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productsUrl)
  }

  createProduct(product: ProductRepresentation): Observable<ProductRepresentation> {
    const productsUrl: string = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }
}
