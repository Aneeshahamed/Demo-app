import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginServiceService } from '../Services/login-service.service';
import { SignupModel } from '../Models/SignupModel';
import { HttpErrorResponse } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private loginService : LoginServiceService, private router: Router) { }

  ngOnInit(): void {
    this.RegForm = this.formBuilder.group({
      Email : ['', Validators.required],
      Password : ['', Validators.required],
      confirmPassword : ['', Validators.required],
    });
  }

  RegForm = new FormGroup({
    Email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    Password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmPassword: new FormControl('',[
      Validators.required,
      Validators.pattern(
        /([a-zA-Z0-9][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]){8,}/)
    ])
    });

    SignUp(){
      if(this.RegForm.valid){
        
        this.loginService.postRegisterNewUser(this.RegForm.value).subscribe({
          next:(res)=>{
            alert("User Created Successfully");
            this.router.navigate(['/login']);
          },
          
          error:(res)=>{
            
            alert(res.value);
          }
        })
      }
    }
}
