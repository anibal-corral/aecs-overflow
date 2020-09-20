import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from './user.model';
@Component({
  selector: 'app-signup-screen',
  templateUrl: './signupscreen.component.html',
  styleUrls: ['./signupscreen.component.css']
})
export class SignupscreenComponent implements OnInit {
signupForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email:new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required),
      anotherPassword: new FormControl(null, Validators.required),

      firstName:new FormControl(null, Validators.required),
      lastName:new FormControl(null, Validators.required)
    });

  }
  onSubmit(){

    if(this.signupForm.valid){
      const {email,password,firstName,lastName,anotherPassword} = this.signupForm.value;
      if(password===anotherPassword){
  const user = new User(email,password);

  console.log(user);
}

    }
  }
}
