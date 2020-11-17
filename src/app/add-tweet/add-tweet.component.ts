import { Component, OnInit } from '@angular/core';
import{ FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css']
})
export class AddTweetComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    msg : new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

}