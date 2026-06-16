import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Orders, Order } from '../../services/orders';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-list.html',
})
export class OrdersList implements OnInit {

  orders: Order[] = [];

  constructor(private ordersService: Orders) {}

  ngOnInit() {
    this.ordersService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }
}
