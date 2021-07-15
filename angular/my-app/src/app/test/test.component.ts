import { Component, OnInit } from '@angular/core';
import { MeanGamesService } from '../services/mean-games.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  games:any = [];
  constructor(private gameService: MeanGamesService) { }

  ngOnInit(): void {
    this.gameService.getAllGames().subscribe(data => {
      console.log(data)
      this.games = data;
    })
  }


}
