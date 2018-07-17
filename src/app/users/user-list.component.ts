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

    filteredUsers: IUser[];
    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
    }

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.filteredUsers = this.users;
        this.listFilter = '';
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
            this.filteredUsers = users;
        });
    }

    performFilter(filterBy: string): IUser[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.users.filter((user: IUser) =>
            user.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

}
