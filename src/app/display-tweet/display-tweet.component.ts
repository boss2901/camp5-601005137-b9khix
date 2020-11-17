import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
import { Tweet } from '../tweet'

@Component({
  selector: 'app-display-tweet',
  templateUrl: './display-tweet.component.html',
  styleUrls: ['./display-tweet.component.css']
})
export class DisplayTweetComponent implements OnInit {

  constructor() { }
  @Input() tweet: Tweet;
  ngOnInit() { 
    this.tweet ={
      ...this.tweet,
      date: this.timeAgo(this.tweet.date.toDate())
    }
  }

  timeAgo(val: Date){
    const now =new Date();
    const diff = Math.abs(now.getTime() - val.getTime());
    const diffDay = Math.ceil(diff / (1000*3600*24));
    const diffHour =Math.ceil(diff/(1000 * 3600));
    const diffMinunte =Math.ceil(diff/(1000*60));
    const diffSecond =Math.ceil(diff/1000);

    if(diffSecond<60){
      return "Just now";
    }
    if(diffMinunte < 24){
      return `${diffMinunte} minunte(s) ago`;
    }
    if(diffHour < 24){
      return `${diffHour} Hour(s) ago`;
    }
    return `${diffDay} day(s) ago`;
  }
};