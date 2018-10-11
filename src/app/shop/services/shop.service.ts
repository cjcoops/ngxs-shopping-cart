import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { catchError } from "rxjs/operators";

@Injectable()
export class ShopService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`api/products`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
