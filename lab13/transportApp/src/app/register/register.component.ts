import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message = "Successfully Registered";
  constructor(private userService: UserServiceService) { }
  success: boolean = false;
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    budget: new FormControl('')
  })
  

  ngOnInit(): void {
  }

  onSubmit(){
    alert("hi")
    this.userService.registerUser(this.registerForm.value).then(data =>{
      this.success = true
    })
  }
}
