import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
// import { MatSnackBarConfig } from '@angular/material/snack-bar';

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
  // autoHide: number = 10000;



  constructor(private formBuilder: FormBuilder, private user: UserService) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

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
    this.user.login(reqData).subscribe(
      (response) => { console.log(response); }
    )
    // this.user.login(reqData).subscribe(
    //   (response:any)=>{
    //     localStorage.setItem('Token', response['token']);
    //     this.openSnackBar('Login success', 2000);
    //     console.log(response);
    //   },
    //   error =>{
    //     try{
    //       if(error['status'] == 0){
    //         this.openSnackBar('Login failed: server offline',2000);
    //       }
    //       else{
    //         this.openSnackBar('Login failed:',2000);
    //       }
    //     }
    //     catch(error){

    //     }
    // });

    //   // display form values on success
    //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    // }

  }
}
