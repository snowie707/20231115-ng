import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeanProductsService {
 private apiUrl = 'https://qr9nuobdpi.execute-api.us-east-1.amazonaws.com/prod/bean_products';

  constructor(private http: HttpClient) { }

  getBeanProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}