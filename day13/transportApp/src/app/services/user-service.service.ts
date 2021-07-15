import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class User{
  name!: string;
  budget!: number;
  username!: number;
  _id!: number;
  destinations!: any[]
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:5050/api";
  getUsers():Promise<User[]>{
    return this.http.get<User[]>(this.baseUrl+"/users/").toPromise().then(this.complete).catch(this.failed)
  }

  addUser(user: User):Promise<User>{
    return this.http.post<User>(this.baseUrl+"/users/",user).toPromise().then(this.complete).catch(this.failed)
  }

  updateUser(user: User, id: String):Promise<User>{
    return this.http.put<User>(this.baseUrl+"/users/"+id,user).toPromise().then(this.complete).catch(this.failed)
  }

  getUser(id: string):Promise<User>{
    return this.http.get<User>(this.baseUrl+"/users/"+id).toPromise().then(this.complete).catch(this.failed)
  }

  deleteUser(id: string): Promise<User>{
    return this.http.delete<User>(this.baseUrl+"/users/"+id).toPromise().then(this.complete).catch(this.failed)
  }

  registerUser(user:any): Promise<any>{
    return this.http.post(this.baseUrl+"/users",user).toPromise().then(this.complete).catch(this.failed);
  }
  complete(data: any){
    return data;
  }
  failed(error: any): Promise<any> {
    return Promise.reject(error.message || error)
  }
}
