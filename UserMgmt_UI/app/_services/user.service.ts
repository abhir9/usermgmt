/**
 * Created by abhi on 9/16/2017.
 */
import  { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }
// get all users
    getAll() {
        return this.http.get('http://localhost:5040/leadschool/user', this.headers()).map((response: Response) => response.json().content.users);
    }

// get user by id
    getById(id: number) {
        return this.http.get('http://localhost:5040/leadschool/user' + id, this.headers()).map((response: Response) => response.json());
    }

// create user
    create(user: User) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:5040/leadschool/signup', JSON.stringify(user), {headers}).map((response: Response) => response.json());
    }

// update user by id
    update(user: User) {
        console.log(user);
        return this.http.put('http://localhost:5040/leadschool/user/' + user._id,  JSON.stringify(user), this.headers()).map((response: Response) => response.json());
    }
// delete user by id
    delete(id: number) {
        return this.http.delete('http://localhost:5040/leadschool/user/'+ id, this.headers()).map((response: Response) => response.json());
    }

// setting headers
    private headers() {
        if (localStorage.getItem('token')) {
            return new RequestOptions({ headers: new Headers({ 'Authorization': localStorage.getItem('token') ,'Content-Type': 'application/json'})});
        }
    }
}