import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { OrdersService, Order } from '../../services/orders';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './orders-list.html',
  styleUrls: ['./orders-list.scss']
})
export class OrdersListComponent implements OnInit {

  orders: Order[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.ordersService.getOrders().subscribe(res => {
      this.orders = res;
    });
  }
}
