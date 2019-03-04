import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: []
})
export class AccueilComponent {

  nouvelleChanson: any[] = [];
  chargement: boolean;

  erreur: boolean;
  messageErreur: string;

  constructor( private spotify: SpotifyService ) {

    this.chargement = true;
    this.erreur = false;

    // Dans cette section, la requête GET est faite
    // Il est nécessaire de s'abonner quand il est exécuté, c'est-à-dire d'être à l'écoute des modifications
    // que ce service peut retourner

    // Les données sont ce que le service renvoie

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {

          console.log(data);
          this.nouvelleChanson = data;
          this.chargement = false;
        }, ( erreurService ) => {

          this.chargement = false;
          this.erreur = true;
          console.log(erreurService);
          this.messageErreur = erreurService.erreur.erreur.message;

        });

  }



}
