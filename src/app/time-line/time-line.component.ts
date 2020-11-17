import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Tweet } from "../tweet";

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  tweets : Tweet[];

  constructor( private firebaseService:FirebaseService)
  {}

  ngOnInit() {
    this.firebaseService.getTweets().subscribe(val => {this.tweets = val;});
  }
}