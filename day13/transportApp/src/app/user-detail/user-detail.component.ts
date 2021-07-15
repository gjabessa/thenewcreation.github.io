import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddUserComponent, Type } from '../add-user/add-user.component';
import { User, UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserServiceService, private route: ActivatedRoute, private router: Router) { }
  user: User = new User();
  
  id = this.route.snapshot.params.id;

  deleteSuccess: boolean = false;
  @ViewChild(AddUserComponent) addUser!: AddUserComponent;


  ngOnInit(): void {
    console.log(this.user)
    this.getUser()
    this.addUser.id = this.id;
    console.log(this.addUser.userForm)
  }
  

  getUser(){
    
    this.userService.getUser(this.id).then(user =>{
      
      this.user = user;
      
    })
  }

  delete(){
    this.deleteSuccess=true;
    // this.userService.deleteUser(this.id).then(this.redirectToHome)
  }
  
  update(){
    
  }
  redirectToHome = () => { // use of arrow function for accessing parent context
    this.router.navigate(['']);
  }
}

