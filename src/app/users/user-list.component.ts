import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { IUser } from './user';
import { UserService } from './user.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  currentUser: IUser;
  users: IUser[] = [];

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  deleteUser(id: number) {
      this.userService.delete(id).pipe(first()).subscribe(() => { 
          this.loadAllUsers() 
      });
  }

  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => { 
          this.users = users; 
      });
  }

}
