import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import {  FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  submitMessage: string;
  
  username = new FormControl();
  password = new FormControl();
  constructor(private authService : AuthenticationService, private routerService:RouterService){
   
  }

   ngOnInit(){}
  

    loginForm = new FormGroup({
    username:new FormControl('', Validators.required),
    password:new FormControl('', [Validators.required, Validators.minLength(6)])});

    


    loginSubmit() {
    
      this.username=this.username.value;
      this.password=this.password.value;
      this.authService.authenticateUser(this.loginForm.value).subscribe(
        data=>{ console.log(data['token']);
          
          this.authService.setBearerToken(data['token']);
          this.routerService.routeToDashboard();
        
        },
        error=>{
          this.submitMessage = error.message;
          if (error.status === 403) {
            this.submitMessage = 'Unauthorized';
          } else {
            this.submitMessage = 'Http failure response for http://localhost:3000/auth/v1: 404 Not Found';
          }
        }
      );
      

    }


 
}