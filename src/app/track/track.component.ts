import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from '../spotify.service';
import * as firebase from 'firebase';
import {timestamp} from 'rxjs-compat/operator/timestamp';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;
  uri: string;
  artiste: string[];
  genre: any;
  duree: any;
  nbArtiste: number;


  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private spotifyService: SpotifyService,
  ) {
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
      });
  }

  renderTrack(res: any): void {
    this.track = res;
  }

  back(): void {
    this.location.back();
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
    let user = firebase.auth().currentUser;
    user = user.toJSON();
    const database = firebase.firestore();
    const now = new Date();
    const date = now.toDateString();
    const musique = database.collection('musiques').doc();
    const vote = database.collection('vote').doc();
    const artiste = database.collection('artiste').doc();
    const album = database.collection('album').doc();
    const genre = database.collection('genre').doc();

    musique.set({
      idMusique: musique.id,
      auteur: this.artiste,
      duree: this.duree,
      uri: this.uri,
    });

    vote.set({
      idVote: vote.id,
      idUtilisateur: user.uid,
      idMusique: musique.id,
      note: 0,
      dateVote: date,
    });




  }
}
