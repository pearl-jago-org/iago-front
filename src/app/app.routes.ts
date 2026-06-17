import { Routes } from '@angular/router';

import { UsersCreateComponent } from './components/users-create/users-create';
import { UsersListComponent } from './components/users-list/users-list';
import { OrdersCreateComponent } from './components/orders-create/orders-create';
import { OrdersListComponent } from './components/orders-list/orders-list';

export const routes: Routes = [
  { path: 'users/create', component: UsersCreateComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'orders/create', component: OrdersCreateComponent },
  { path: 'orders', component: OrdersListComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];
