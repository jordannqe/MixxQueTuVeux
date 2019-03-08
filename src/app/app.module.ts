import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

// Spotify

import { AccueilComponent } from './components/accueil/accueil.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { ArtisteComponent } from './components/artiste/artiste.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


import { VueComponent } from './components/vue/vue.component';
import { ChargementComponent } from './components/shared/chargement/chargement.component';

const appRoutes: Routes = [
  {path: 'auth/signin', component: SigninComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'end-week-playlist', component: EndWeekPlaylistComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: 'profile', pathMatch: 'full'},
  {path: '**', redirectTo: 'profile'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    SearchComponent,
    ContactComponent,
    EndWeekPlaylistComponent,
    HeaderComponent,
    // Spotify
    AccueilComponent,
    RechercheComponent,
    ArtisteComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    VueComponent,
    ChargementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // toutes les routes se trouvent dans la variable appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
