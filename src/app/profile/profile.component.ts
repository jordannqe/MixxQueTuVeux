import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


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

  constructor() { }

  ngOnInit() {
  }

}
