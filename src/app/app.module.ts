import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { EndWeekPlaylistComponent } from './end-week-playlist/end-week-playlist.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';

import { ArtisteComponent } from './artiste/artiste.component';
import { AlbumComponent } from './album/album.component';
import { SpotifyService } from './spotify.service';
import { HttpModule } from '@angular/http';
import {TrackComponent} from './track/track.component';

import { TransformationPipe } from './pipes/transformation.pipe';

const appRoutes: Routes = [
  {path: 'auth/signin', component: SigninComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'end-week-playlist', component: EndWeekPlaylistComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  {path: '**', redirectTo: 'acceuil'},
  { path: 'artists/:id', component: ArtisteComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    SearchComponent,
    ContactComponent,
    EndWeekPlaylistComponent,
    HeaderComponent,
    AccueilComponent,

    ArtisteComponent,
    TrackComponent,
    AlbumComponent,
    TransformationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // toutes les routes se trouvent dans la variable appRoutes
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: SpotifyService, useClass: SpotifyService },
    { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
