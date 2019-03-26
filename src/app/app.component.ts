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
    const config = {
      apiKey: 'AIzaSyBt5ztcsMMq9sKlDvqell1Eo9fCMFhpIrk',
      authDomain: 'mixxquetuveux-5585e.firebaseapp.com',
      databaseURL: 'https://mixxquetuveux-5585e.firebaseio.com',
      projectId: 'mixxquetuveux-5585e',
      storageBucket: 'mixxquetuveux-5585e.appspot.com',
      messagingSenderId: '855205442194'
    };
    firebase.initializeApp(config);

    var db = firebase.firestore();
  }
}
