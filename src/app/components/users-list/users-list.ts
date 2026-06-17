import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { UsersService, User } from '../../services/users';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(res => {
      this.users = res;
    });
  }
}
