/**
 * Module racine de l'application
 * TP3 - Data Binding et Interpolation
 * Import de FormsModule pour le two-way binding (Activité 4.1)
 */
import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Activité 4.1 : Import de FormsModule

import { App } from './app';
import { Bienvenue } from './components/bienvenue/bienvenue';
import { Produit } from './components/produit/produit';
import { Utilisateur } from './components/utilisateur/utilisateur';
import { Panier } from './components/panier/panier';
import { Home } from './quiz/home/home';
import { Game } from './quiz/game/game';
import { Question } from './quiz/question/question';
import { Score } from './quiz/score/score';

@NgModule({
  declarations: [
    App,
    Bienvenue,
    Produit,
    Utilisateur,
    Panier,
    Home,
    Game,
    Question,
    Score
  ],
  imports: [
    BrowserModule,
    FormsModule // Activité 4.1 : Ajout de FormsModule pour ngModel
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
