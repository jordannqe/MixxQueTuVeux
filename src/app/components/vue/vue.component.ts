import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.css']
})
export class VueComponent {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }


  vueartiste( item: any ) {

    let idArtiste;
    let idAlbum;

    if ( item.type === 'artist' ) {
      idArtiste = item.id;

    } else {
      if (item.type === 'album') {
        idAlbum = item.id;
      }
    }
    // else { idArtiste = item.artists[0].id; }

    this.router.navigate([ '/artist', idArtiste  ]);

  }

}
