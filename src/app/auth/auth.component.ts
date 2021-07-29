import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { authService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;

    constructor(private authService: authService) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        if (this.isLoginMode) {
            //.. Here is Login code 
        }
        else {
            this.authService.signup(email, password)
                .subscribe(resData => {
                    console.log(resData)
                },
                    err => {
                        console.log(err)
                    }
                );
            console.log('done');
            form.reset();
        }
    }
}