import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {forEach} from '@angular/router/src/utils/collection';
import GetOptions = firebase.firestore.GetOptions;
import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';

@Component({
  selector: 'app-end-week-playlist',
  templateUrl: './end-week-playlist.component.html',
  styleUrls: ['./end-week-playlist.component.css']
})
export class EndWeekPlaylistComponent implements OnInit {
  /*
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
  */

  constructor() {
  }

  ngOnInit() {
    // this.afficherPlaylist();
    const result = [];
    let stockageMax;
    const database = firebase.firestore();
    database.collection('musiques').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        stockageMax = doc.data();
        for (const key in stockageMax) {
          const value = stockageMax[key];
          console.log(key, ':', value);
        }
        /*
        const stockage = doc.data();
        stockage.auteur.get().then(snap => {
          stockage.auteur = snap.data();
          stockageMax.push(stockage);
        });*/
        /*
        const stat = {
          'auteur': doc.data().auteur,
          'genre': doc.data().genre
        };
        console.log(stat);
        */
        // result = result.concat(stat);
        // this.renderMusic(doc);
      });
    });
    // console.log(stockageMax);
/*
    for (let key = 0; key < stockageMax.length; key++) {
      const value = stockageMax[key];
      console.log('test');
      console.log(key, '+', value, 'youpiiiii ?');
    }
    */
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
  /*
  afficherPlaylistB() {
    const database = firebase.firestore();
    let tableauMusique: string[];
    database.collection('musiques').get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log('New ==> ', doc.id, ' => ', doc.data());
          console.log('New ==> ', doc.id, ' => ', doc.data().duree);
          tableauMusique.push(doc.data().duree);
      });
      return tableauMusique;
    });
  }
  */
  renderMusic(doc) {
    /*
    const name = document.createElement('span');
    const auteur = document.createElement('span');
    const genre = document.createElement('span');
    // name.textContent = doc.data().name;
    auteur.textContent = doc.data().auteur;
    genre.textContent = doc.data().genre;
    console.log(auteur, '|', genre);
    */




  }
}

