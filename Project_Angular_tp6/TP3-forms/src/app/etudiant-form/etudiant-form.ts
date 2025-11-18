/**
 * Composant EtudiantForm - Formulaire basé sur un modèle (Template-Driven)
 * TP6 - Section III : Créer un composant de formulaire
 * 
 * Ce composant gère les interactions de données et utilisateur pour le formulaire étudiant.
 * Il utilise la liaison de données bidirectionnelle avec ngModel et les validations HTML5.
 */
import { Component } from '@angular/core';
import { Etudiant } from '../etudiant';

@Component({
  selector: 'app-etudiant-form',
  standalone: false,
  templateUrl: './etudiant-form.html',
  styleUrls: ['./etudiant-form.css']
})
export class EtudiantForm {
  // Liste des classes disponibles
  classes = ['L2DSI1', 'L2DSI2', 'L2DSI3', 'L3DSI1', 'L3DSI2'];

  // Modèle étudiant avec des données factices pour la démonstration
  model = new Etudiant(18, 'Mohamed', this.classes[0], 'XYZ');

  // Indicateur de soumission du formulaire
  submitted = false;

  // Section VIII : Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    this.submitted = true;
  }

  // Section VII : Méthode pour créer un nouveau étudiant
  // Réinitialise le formulaire et ses indicateurs de contrôle
  newEtudiant() {
    this.model = new Etudiant(42, '', '');
  }

  // Propriété de diagnostic pour voir les données pendant le développement
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
