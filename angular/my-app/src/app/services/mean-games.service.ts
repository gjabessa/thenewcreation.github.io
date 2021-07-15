import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MeanGamesService {

  constructor(private http: HttpClient) {
    
   }

   getAllGames(){
     return this.http.get("http://localhost:5050/api/games")
   }
}
