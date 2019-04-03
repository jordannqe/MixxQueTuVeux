import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from '../spotify.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})

export class TrackComponent implements OnInit {
  public id: string;
  public track: Object;
  public uri: string;
  public artiste: string[];
  public genre: any;
  public duree: any;
  public user: any;
  public nb: string[];
  public titre: string;


  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private spotifyService: SpotifyService,
  ) {
    const database = firebase.firestore();
    const musique = database.collection('musiques');
    route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.artiste = [];

  }



  ngOnInit(): void {
    this.spotifyService
      .getTrack(this.id)
      .subscribe((res: any) => {
        this.renderTrack(res);
        this.getUri(res);
        this.getArtiste(res);
        this.getDuree(res);
        this.getTitre(res);
      });
  }



  renderTrack(res: any): void {
    this.track = res;
  }

  back(): void {
    this.location.back();
  }

  getTitre(res: any): void {
    this.titre = res.name;

}

  getUri(res: any): void {
    this.uri = res.uri;
  }

  getArtiste(res: any) {
    const nbArtiste = res.artists.length;
    for (let i = 0; i <= nbArtiste - 1; i++) {
      this.artiste.push(res.artists[i].name);
    }
    return this.artiste;
  }

  getDuree(res: any): void {
    this.duree = res.duration_ms;
  }

  ajouterVote() {
    this.user = firebase.auth().currentUser;
    this.user = this.user.toJSON();
    const database = firebase.firestore();
    const now = new Date();
    const date = now.toDateString();
    const musique = database.collection('musiques').doc();
    const vote = database.collection('vote').doc();
    const artiste = this.artiste;
    const titre = this.titre;
    const musiqueDoc = database.collection('musiques');
    let nb = 0;
    let nbPlaylist = 0;
    const user = this.user.uid;
    const duree = this.duree;
    const uri = this.uri;
    const playlist = database.collection('playlist');
    const playlistDoc = database.collection('playlist').doc();
    let playlistId = '';
    let nbVote = 1;


    musiqueDoc.where('uri', '==', this.uri).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id)
        nb = nb + 1;
      });
      if (nb > 0) {
        vote.set({
          idVote: vote.id,
          idUtilisateur: user,
          idMusique: musique.id,
          note: 0,
          nbVote: 0,
          dateVote: date,
        });
      } else {
        musique.set({
          idMusique: musique.id,
          auteur: artiste,
          duree: duree,
          uri: uri,
        });

        vote.set({
          idVote: vote.id,
          idUtilisateur: user,
          idMusique: musique.id,
          note: 0,
          nbVote: 0,
          dateVote: date,
        });
      }
    });

    playlist.where('uri', '==', this.uri).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id);
        playlistId = doc.id;
        nbVote = doc.data().nbVote;
        nbPlaylist = nbPlaylist + 1;
      });
      if (nbPlaylist > 0) {
        playlist.doc(playlistId).update({
          nbVote: nbVote + 1
        });
      } else {
        playlistDoc.set({
          nom: titre,
          artiste: artiste,
          nbVote: 1,
          uri: uri
        });
      }
    });
  }
}
