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
    const MusiquePlaylist = [];
    const TabMusique = [];
    let nb = 0;
    const playlist = document.querySelector('#playlist');
    database.collection('playlist').orderBy('nbVote', 'desc').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // console.log(doc.id);
        MusiquePlaylist.push(doc.data());
        let tr = document.createElement('tr');
        let classement = document.createElement('td');
        let nom = document.createElement('td');
        let artiste = document.createElement('td');
        let nbVote = document.createElement('td');
        let tdUri = document.createElement('td');
        let uri = document.createElement('iframe');
        let tdvote = document.createElement('td');
        let vote = document.createElement('button');



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
      console.log(MusiquePlaylist);

    });

  }
}

