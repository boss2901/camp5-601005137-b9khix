// module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// firbase

import { AngularFireModule} from '@angular/fire';
import { environment } from './environment';

// component
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { DisplayTweetComponent } from './display-tweet/display-tweet.component';
import { FirebaseService } from './firebase.service';


// service


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: TimeLineComponent },
      { path: "add-tweet" , component: AddTweetComponent }
    ]),ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],

  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent, 
    TimeLineComponent, 
    AddTweetComponent, DisplayTweetComponent, 
  ],

  bootstrap:    [ 
    AppComponent 
  ],

  providers: [FirebaseService]

})
export class AppModule { }
