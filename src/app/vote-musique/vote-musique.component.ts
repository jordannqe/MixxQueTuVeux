import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-musique',
  template: `
        <div class="row" style="text-align: center">
            <div class="col-6">
                <h1 (click)="incr()" style="cursor: pointer;">+</h1>
            </div>
            <div class="col-6">
                <h1 (click)="dec()" style="cursor: pointer;">-</h1>
            </div>
            <div class="col-12">
                <h1>TEST</h1>
            </div>
        </div>
    `,
  templateUrl: './vote-musique.component.html',
  styleUrls: ['./vote-musique.component.css']
})

export class VoteMusiqueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  incr() {
    if (this.jeu.note < 5) {
      this.jeu.note++;
    }
  }

  dec() {
    if (this.jeu.note > 0) {
      this.jeu.note--;
    }
  }

}
