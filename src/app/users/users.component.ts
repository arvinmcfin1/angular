import { User } from './../interfaces/user';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'Users';
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  onDeleteUser(user: User) {
    this.userService.deleteUser(user);
  }

}
