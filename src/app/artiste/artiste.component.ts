import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit {
  id: string;
  artiste: Object;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private spotifyService: SpotifyService
  ) {
    route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.spotifyService
      .getArtiste(this.id)
      .subscribe((res: any) => this.rendueArtiste(res));
  }

  rendueArtiste(res: any): void {
    this.artiste = res;
  }

}
