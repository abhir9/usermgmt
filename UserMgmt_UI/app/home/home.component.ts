/**
 * Created by abhi on 9/16/2017.
 */
import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService,UserService } from '../_services/index';
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loading = false;
    constructor(private userService: UserService, private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.loading = true;
        this.userService.delete(id)
            .subscribe(
                data => {
                    this.alertService.success('Deleted Successfully', true);
                    this.loadAllUsers()
                },
                error => {
                    this.alertService.error(JSON.parse(error._body).message);
                    this.loading = false;
                });

    }
    updateUser(user: User) {
        this.loading = true;
        this.userService.update(user)
            .subscribe(
                data => {
                    this.alertService.success('Updated Successfully', true);
                    this.loadAllUsers()
                },
                error => {
                    this.alertService.error(JSON.parse(error._body).message);
                    this.loading = false;
                });
    }
	    addUser(user: User) {
        this.loading = true;
        this.userService.create(user)
            .subscribe(
                data => {
                    this.alertService.success('Added Successfully', true);
                    this.loadAllUsers()
                },
                error => {
                    this.alertService.error(JSON.parse(error._body).message);
                    this.loading = false;
                });
    }
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; this.users.push({'_id':'','username':'','firstname':'','lastname':'','password':''});});
    }
}