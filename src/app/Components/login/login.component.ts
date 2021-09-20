import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // users = '1';
  loginForm!: FormGroup;
  submitted = false;
  // setAutoHide:boolean=false;
  



  constructor(private formBuilder: FormBuilder, private user: UserService, public route: Router,public snackBar: MatSnackBar) { }
  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0)
    {
      config.duration = duration; 
    }
    this.snackBar.open(message, undefined, config);
  } 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  // fontcolors=['color:blue','color:red','color:#orange','color:blue','color:green','color:red'];
  // fonttexts=['F','u','n','d','o','o'];

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let reqData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }
    this.user.login(reqData).subscribe
      (
        (response: any) => {
          localStorage.setItem('Token', response['id']);
          console.log(response);
          this.route.navigate(['home']);
        }
      );

    this.user.login(reqData).subscribe(
      (response:any)=>{
        localStorage.setItem('Token', response['token']);
        this.openSnackBar('Login success', 2000);
        console.log(response);
      },
      error =>{
        try{
          if(error['status'] == 0){
            this.openSnackBar('Login failed: server offline',2000);
          }
          else{
            this.openSnackBar('Login failed:',2000);
          }
        }
        catch(error){

        }
    });

    //   // display form values on success
    //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    // }

      }
}
