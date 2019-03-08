import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styles: []
})
export class ArtisteComponent {

  artiste: any = {};
  topTitre: any[] = [];

  chargement: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService ) {

    this.chargement = true;

    this.router.params.subscribe( params => {

      this.getArtiste( params.id );
      this.getTopTitre( params.id );

    });

  }


  getArtiste( id: string ) {

    this.chargement = true;

    this.spotify.getArtiste( id )
          .subscribe( artiste => {
            console.log(artiste);
            this.artiste = artiste;

            this.chargement = false;
          });

  }

  getTopTitre( id: string ) {

    this.spotify.getTopTitre( id )
            .subscribe( topTitre => {
              console.log(topTitre);
              this.topTitre = topTitre;
            });

  }


}
