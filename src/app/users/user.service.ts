import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IUser } from './user';


@Injectable({
  providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<IUser[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get<IUser>(`${environment.apiUrl}/users/` + id);
    }

    register(user: IUser) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: IUser) {
        return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
}