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
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes: Routes = [
  {path: 'auth/signin', component: SigninComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'end-week-playlist', component: EndWeekPlaylistComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent},
  {path: 'accueil', component: AccueilComponent},
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
    AccueilComponent,
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
