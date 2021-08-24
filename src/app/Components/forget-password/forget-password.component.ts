import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetpassword!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.forgetpassword = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: ['advance', Validators.requiredTrue]
    });
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   get f() { return this.forgetpassword.controls; }

   onSubmit() {
     this.submitted = true;
 
     // stop here if form is invalid
     if (this.forgetpassword.invalid) {
       return;
     }
 
     // display form values on success
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgetpassword.value, null, 4));
   }
 
 }
 
