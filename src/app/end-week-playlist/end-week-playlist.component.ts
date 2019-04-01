import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-end-week-playlist',
  templateUrl: './end-week-playlist.component.html',
  styleUrls: ['./end-week-playlist.component.css']
})
export class EndWeekPlaylistComponent implements OnInit {
  mesMusiques = [
    {
      idMusique: '1',
      name: 'music 1',
      auteur: 'moi',
      duree: '3m50',
      genre: 'rap'
    },
    {
      idMusique: '2',
      name: 'music 2',
      auteur: 'toi',
      duree: '3m10',
      genre: 'rap'
    },
    {
      idMusique: '3',
      name: 'music 3',
      auteur: 'vous',
      duree: '4m50',
      genre: 'metal'
    }
  ];
  constructor() {
  }

  ngOnInit() {
    this.afficherPlaylist();
    this.afficherPlaylistB();
  }

  afficherPlaylist() {
    const database = firebase.firestore();
    database.collection('musiques').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
      });
    });
  }
  afficherPlaylistB() {
    const database = firebase.firestore();
    database.collection('musiques').where('duree', '==', 226993)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log('New ==> ', doc.id, ' => ', doc.data());
      });
    });
  }
}

