import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService, User } from '../../services/users';

@Component({
  selector: 'app-users-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users-create.html',
  styleUrls: ['./users-create.scss']
})
export class UsersCreateComponent {

  user: User = { name: '', email: '' };

  constructor(private usersService: UsersService) {}

  createUser() {
    this.usersService.createUser(this.user).subscribe(res => {
      console.log('User created:', res);
      this.user = { name: '', email: '' };
    });
  }
}
