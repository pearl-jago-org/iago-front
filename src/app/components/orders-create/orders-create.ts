import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { OrdersService, Order } from '../../services/orders';
import { UsersService, User } from '../../services/users';

@Component({
  selector: 'app-orders-create',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './orders-create.html',
  styleUrls: ['./orders-create.scss']
})
export class OrdersCreateComponent implements OnInit {

  users: User[] = [];

  order: Order = {
    userId: '',
    product: '',
    amount: 0
  };

  constructor(
    private ordersService: OrdersService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  createOrder() {
    this.ordersService.createOrder(this.order).subscribe(res => {
      console.log('Order created:', res);
      this.order = { userId: '', product: '', amount: 0 };
    });
  }
}
