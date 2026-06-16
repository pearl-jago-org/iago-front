import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Users, User } from '../../services/users';

@Component({
  selector: 'app-users-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users-create.html',
})
export class UsersCreate {

  user: User = {
    name: '',
    email: ''
  };

  constructor(private usersService: Users) {}

  createUser() {
    this.usersService.createUser(this.user).subscribe(() => {
      alert('User created');
      this.user = { name: '', email: '' };
    });
  }
}
