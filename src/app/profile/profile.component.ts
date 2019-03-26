import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() vote: number;
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
  constructor(vote: number) {
    this.vote = 0;
  }

  ngOnInit() {
  }
  incr() {
    if (this.vote < 5) {
      this.vote++;
    }
  }

  dec() {
    if (this.vote > 0) {
      this.vote--;
    }
  }

}
