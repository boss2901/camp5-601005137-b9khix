import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let arr:number[] = [1,2,3,4]

    for(var i=0; i < arr.length; i++){
      console.log("for loop : ",arr[i])
    }

    arr.forEach(obj => {
      console.log("for Each: ",obj)
    })

  }

}