import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router) {}

    @ViewChild('fielduser') fieldInput: ElementRef;

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('user', this.fieldInput.nativeElement.value);
    }
}
