import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MixxQueTuVeux';

  constructor() {
    var config = {
      apiKey: "AIzaSyDM7LJBxINzn98FVJ5dW_s0sCsYOsOC3Yc",
      authDomain: "mixxquetuveuxx.firebaseapp.com",
      databaseURL: "https://mixxquetuveuxx.firebaseio.com",
      projectId: "mixxquetuveuxx",
      storageBucket: "",
      messagingSenderId: "698773037024"
    };
      firebase.initializeApp(config);

  }
}
