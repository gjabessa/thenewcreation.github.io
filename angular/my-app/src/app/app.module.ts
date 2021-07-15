import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AngularComponent } from './angular/angular.component';
import { MeanGamesService } from './services/mean-games.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: "abc", component:TestComponent},
  {path: "angular",component:AngularComponent}
]; // sets up routes constant where you define your 

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [MeanGamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
