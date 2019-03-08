import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// importer des extensions réactives de la carte
import { map } from 'rxjs/operators';

// Habituellement, lorsque vous travaillez avec une API
// Il est nécessaire de centraliser les informations, c'est pourquoi ce service

// Ce service va pouvoir être injecté dans d'autres composants
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    // console.log('Spotify Service');
  }

// Pour requête générique
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    // Transformation de données
    // Définir les en-têtes nécessaires à l'API Spotify
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQByvI9mhsFIfpeZmSAMFKldwTRFThK_KzH-W9RKbDWcDDr6HwhTmwSSNy3eCYW-vn3dAy2uHP9QOZTKLAI'
    });

    return this.http.get(url, { headers });
  }

// Lorsque l'API Spotify envoie la réponse, elle envoie trop d'informations et MAP.
  // simplement filtrer ce qui nous interresse

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map(data => data.albums.items)
    );
  }

// concernant la recherche

  // Artiste
  getArtistes(champ: string) {
    return this.getQuery(`search?q=${champ}&type=artist&limit=15`).pipe(
      map(data => data.artists.items)
    );
  }

  getArtiste(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  // Musiques
  getMusiques(champ: string) {
    return this.getQuery(`search?q=${champ}&type=track&limit=15`).pipe(
      map(data => data.tracks.items)
    );
  }

  getMusique(id: string) {
    return this.getQuery(`tracks/${id}`);
  }

  // Albums
  getAlbums(champ: string) {
    return this.getQuery(`search?q=${champ}&type=album&limit=15`).pipe(
      map(data => data.albums.items)
    );
  }

  getAlbum(id: string) {
    return this.getQuery(`album/${id}`);
  }

  //

  getTopTitre(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=fr`).pipe(
      map(data => data.tracks)
    );
  }
}
