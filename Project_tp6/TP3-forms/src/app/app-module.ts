/**
 * AppModule - Module racine de l'application
 * TP6 - Section II.4 : Configuration du module avec FormsModule
 * 
 * FormsModule doit être importé pour utiliser les formulaires basés sur des modèles,
 * y compris ngModel et NgForm.
 */
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { App } from './app';
import { EtudiantForm } from './etudiant-form/etudiant-form';

@NgModule({
  declarations: [
    App,
    EtudiantForm
  ],
  imports: [
    BrowserModule,
    FormsModule // Ajout de FormsModule pour les formulaires basés sur des modèles
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
