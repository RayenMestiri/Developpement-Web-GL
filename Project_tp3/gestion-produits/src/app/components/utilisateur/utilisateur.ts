/**
 * Composant Utilisateur - Activité 4
 * TP3 - Two-Way Data Binding avec ngModel
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  standalone: false,
  templateUrl: './utilisateur.html',
  styleUrls: ['./utilisateur.css']
})
export class Utilisateur {
  // Activité 4.3 : Propriété nom pour le two-way binding
  nom: string = '';
  email: string = '';
  age: number = 0;
}
