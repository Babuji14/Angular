import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  signUpForm= new FormGroup({
    fn:new FormControl('', Validators.required),
    ln:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', Validators.required),
    cp:new FormControl('', Validators.required)
  })

  fn:string="";
  ln:string="";
  email:string="";
  password:string="";
  cp:string="";

  constructor(private router:Router){}

  onSubmit(){
     const formData = this.signUpForm.value;
      if(this.signUpForm.valid){
      console.log(this.signUpForm.value);
    }

    if(formData.password === formData.cp){
      sessionStorage.setItem('details', JSON.stringify(formData))
      this.router.navigate(['/signin'])
    }else{
      alert("Mismatch Password. Re-Enter the Password")
    }

  }
}
