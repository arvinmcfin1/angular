import { User } from './../interfaces/user';
import { UserService } from './../services/user.service';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('data-user') user: User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
    //this.userService.deleteUser(this.user);
  }

}
