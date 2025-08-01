import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {
  signInForm= new FormGroup({
    userName:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required)
  })

    constructor(private router:Router){}

  onSubmit() {
  if (this.signInForm.valid) {
    const input = this.signInForm.value; 

    const formData = sessionStorage.getItem('details');
    if (formData) {
      const { fn, password } = JSON.parse(formData);

      if (input.userName === fn && input.password === password) {
        this.router.navigate(['/dashboard']);
      } else {
        alert("No User Found, Please Enter Valid Credentials!");
      }
    } else {
      alert("No User Found, Please Fill up the Sign Up Form");
    }
  } else {
    alert("Please fill all fields");
  }
}

}
