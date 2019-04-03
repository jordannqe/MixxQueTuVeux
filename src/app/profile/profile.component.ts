import {Component, Input, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: any;

  constructor() {
  }

  ngOnInit() {
    this.recupererVote();
  }

  recupererVote() {
    const database = firebase.firestore();
    const profil = document.querySelector('#profil');
    this.user = firebase.auth().currentUser;
    this.user = this.user.toJSON();
    const user = this.user.uid;
    const now = new Date();
    const date = now.toDateString();

    console.log(user);
    database.collection('profil').where('idUtilisateur', '==', user).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (doc.data().dateVote === date) {
          const tr = document.createElement('tr');
          const nom = document.createElement('td');
          const artiste = document.createElement('td');
          const tdUri = document.createElement('td');
          const uri = document.createElement('iframe');

          tr.setAttribute('profil', 'profil');

          nom.textContent = doc.data().nom;
          artiste.textContent = doc.data().artiste;
          uri.setAttribute('src', 'https://open.spotify.com/embed?uri=' + doc.data().uri);
          uri.setAttribute('width', '320');
          uri.setAttribute('height', '90');
          uri.setAttribute('frameborder', '0');
          uri.setAttribute('allowtransparency', 'true');
          uri.setAttribute('allow', 'encrypted-media');

          tdUri.appendChild(uri);
          tr.appendChild(nom);
          tr.appendChild(artiste);
          tr.appendChild(tdUri);

          profil.appendChild(tr);
        }
      });
    });
  }
}
