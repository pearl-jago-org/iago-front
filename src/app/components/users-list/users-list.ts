import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users, User } from '../../services/users';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.html',
})
export class UsersList implements OnInit {

  users: User[] = [];

  constructor(private usersService: Users) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
