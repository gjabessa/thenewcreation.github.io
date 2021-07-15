import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User, UserServiceService } from '../services/user-service.service';

export enum Type{
  Add,
  Update
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserServiceService) { }
  userForm = new FormGroup({
    name: new FormControl(''),
    budget: new FormControl(''),
   
  })
  user!: User;

  type: Type = Type.Add;

  id!: string;

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.type == Type.Add){
        this.userService.addUser(this.userForm.value).then(response => {
          alert('Success')
          this.user=response;
        })
    } else if( this.type == Type.Update){
      
      this.userService.updateUser(this.userForm.value, this.id).then(response => {
        alert('Success')
        this.user=response;
      })
    }
  }

}
