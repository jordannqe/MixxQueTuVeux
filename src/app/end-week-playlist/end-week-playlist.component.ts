import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-end-week-playlist',
  templateUrl: './end-week-playlist.component.html',
  styleUrls: ['./end-week-playlist.component.css']
})
export class EndWeekPlaylistComponent implements OnInit {
  MusiqueVote: any[];
  MesMusique: any[];

  constructor() {
    this.MusiqueVote = [];
    this.MesMusique = [];
  }

  ngOnInit() {
  this.RecupererMusiquePlaylist();
  }


  RecupererMusiquePlaylist() {
    const database = firebase.firestore();
    let nb = 0;
    const playlist = document.querySelector('#playlist');
    database.collection('playlist').orderBy('nbVote', 'desc').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {

        const tr = document.createElement('tr');
        const classement = document.createElement('td');
        const nom = document.createElement('td');
        const artiste = document.createElement('td');
        const nbVote = document.createElement('td');
        const tdUri = document.createElement('td');
        const uri = document.createElement('iframe');

        nb++;

        tr.setAttribute('classement', 'classement');
        // @ts-ignore
        classement.textContent = nb;
        nom.textContent = doc.data().nom;
        artiste.textContent = doc.data().artiste;
        nbVote.textContent = doc.data().nbVote;
        uri.setAttribute('src', 'https://open.spotify.com/embed?uri=' + doc.data().uri);
        uri.setAttribute('width', '320');
        uri.setAttribute('height', '90');
        uri.setAttribute('frameborder', '0');
        uri.setAttribute('allowtransparency', 'true');
        uri.setAttribute('allow', 'encrypted-media');


        tdUri.appendChild(uri);
        tr.appendChild(classement);
        tr.appendChild(nom);
        tr.appendChild(artiste);
        tr.appendChild(nbVote);
        tr.appendChild(tdUri);

        playlist.appendChild(tr);

      });
    });

  }
}

