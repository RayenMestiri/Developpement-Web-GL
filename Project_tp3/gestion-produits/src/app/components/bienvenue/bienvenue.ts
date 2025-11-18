/**
 * Composant Bienvenue - Activité 1
 * TP3 - Data Binding et Interpolation
 * Démonstration de l'interpolation de chaînes de caractères
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenue',
  standalone: false,
  templateUrl: './bienvenue.html',
  styleUrls: ['./bienvenue.css']
})
export class Bienvenue {
  // Activité 1.2 : Propriété message initialisée
  message: string = 'Bienvenue sur notre site !';
}
