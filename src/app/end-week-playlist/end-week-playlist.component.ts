import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-week-playlist',
  templateUrl: './end-week-playlist.component.html',
  styleUrls: ['./end-week-playlist.component.css']
})
export class EndWeekPlaylistComponent implements OnInit {

  musiquesPlaylist = [
    {
      idMusique: '1',
      name: 'music 1',
      auteur: 'moi',
      duree: '3m50',
      genre: 'rap',
      nbVotes: '200'
    },
    {
      idMusique: '2',
      name: 'music 2',
      auteur: 'toi',
      duree: '3m10',
      genre: 'rap',
      nbVotes: '186'
    },
    {
      idMusique: '3',
      name: 'music 3',
      auteur: 'vous',
      duree: '4m50',
      genre: 'metal',
      nbVotes: '150'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
