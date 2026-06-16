import { Routes } from '@angular/router';
import { UsersList } from './components/users-list/users-list';
import { UsersCreate } from './components/users-create/users-create';
import { OrdersList } from './components/orders-list/orders-list';
import { OrdersCreate } from './components/orders-create/orders-create';

export const routes: Routes = [
  { path: 'users', component: UsersList },
  { path: 'users/create', component: UsersCreate },
  { path: 'orders', component: OrdersList },
  { path: 'orders/create', component: OrdersCreate },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];
