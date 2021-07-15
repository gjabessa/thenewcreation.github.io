import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddUserComponent } from '../add-user/add-user.component';
import { User, UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient, private userService: UserServiceService) { }

  users!:User[];
  @ViewChild(AddUserComponent) addUser!: AddUserComponent;

  ngOnInit(): void {

    
    this.getAllGames();

  }

   getAllGames(){
    this.userService.getUsers().then(users =>{
      this.users = users;
      console.log(this.users)
      
    })
  }

  onSubmit(){
    console.log(this.addUser.userForm)
  }
  

}
