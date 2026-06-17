import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  id?: string;
  userId: string;
  product: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUrl = 'http://api.dev.iago.local/orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }
}

