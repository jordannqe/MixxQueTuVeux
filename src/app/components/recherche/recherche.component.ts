import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styles: []
})
export class RechercheComponent {

  artistes: any[] = [];
  musiques: any[] = [];
  albums: any[] = [];

  chargement: boolean;

  constructor(private spotify: SpotifyService) { }

  trouverArtistes(champ: string) {
    console.log(champ);

    this.chargement = true;
    this.spotify.getArtistes( champ )
          .subscribe( (donnees: any) => {
            console.log(donnees);
            this.artistes = donnees;
            this.chargement = false;
          });
  }

  trouverMusiques(champ: string) {
    console.log(champ);

    this.chargement = true;
    this.spotify.getMusiques( champ )
      .subscribe( (donnees: any) => {
        console.log(donnees);
        this.musiques = donnees;
        this.chargement = false;
      });
  }

  trouverAlbums(champ: string) {
    console.log(champ);

    this.chargement = true;
    this.spotify.getAlbums( champ )
      .subscribe( (donnees: any) => {
        console.log(donnees);
        this.albums = donnees;
        this.chargement = false;
      });
  }

}
