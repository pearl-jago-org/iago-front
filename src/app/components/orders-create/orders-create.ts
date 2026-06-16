import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Orders, Order } from '../../services/orders';

@Component({
  selector: 'app-orders-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders-create.html',
})
export class OrdersCreate {

  order: Order = {
    product: '',
    quantity: 1,
    userId: 0
  };

  constructor(private ordersService: Orders) {}

  createOrder() {
    this.ordersService.createOrder(this.order).subscribe(() => {
      alert('Order created');
      this.order = { product: '', quantity: 1, userId: 0 };
    });
  }
}
