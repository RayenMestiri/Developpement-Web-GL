import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importation de FormsModule pour ngModel
import { CommonModule } from '@angular/common'; // Importation de CommonModule pour *ngIf, *ngFor, etc.

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Welcome } from './welcome/welcome';
import { Articles } from './articles/articles';
import { Produits } from './produits/produits';
import { Taches } from './taches/taches';
import { Etudiant } from './etudiant/etudiant';

/**
 * Module principal de l'application
 * Déclare tous les composants et importe les modules nécessaires
 */
@NgModule({
  declarations: [
    App,
    Welcome,
    Articles,
    Produits,
    Taches,
    Etudiant
  ],
  imports: [
    BrowserModule,
    CommonModule,      // Pour les directives *ngIf, *ngFor, etc.
    FormsModule,       // Pour ngModel (two-way binding)
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
