import { Component, OnInit } from '@angular/core';
import { Student, Students } from '../models/TypeStudent';

/**
 * Atelier Guidé : Composant de gestion des étudiants
 * Ce composant démontre l'affichage Maître/Détail avec:
 * - *ngFor pour lister les étudiants
 * - *ngIf pour afficher les détails conditionnellement
 * - [ngClass] pour la sélection visuelle
 * - Event binding pour la sélection
 */
@Component({
  selector: 'app-etudiant',
  standalone: false,
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant implements OnInit {
  /**
   * Liste des étudiants importée du fichier TypeStudent.ts
   */
  etuds: Student[] = Students;

  /**
   * Étudiant actuellement sélectionné
   * Le "!" indique à TypeScript que cette propriété sera initialisée plus tard
   */
  selectedEtudiant!: Student;

  /**
   * Méthode du cycle de vie appelée après l'initialisation du composant
   */
  ngOnInit(): void {
    console.log('Composant étudiant initialisé avec', this.etuds.length, 'étudiants');
  }

  /**
   * Méthode appelée lors du clic sur un étudiant
   * Met à jour l'étudiant sélectionné
   * @param etudiant - L'étudiant sélectionné
   */
  onSelect(etudiant: Student): void {
    this.selectedEtudiant = etudiant;
    console.log('Étudiant sélectionné:', etudiant);
  }

  /**
   * Méthode pour vérifier si un étudiant est sélectionné
   * @param etudiant - L'étudiant à vérifier
   * @returns true si l'étudiant est actuellement sélectionné
   */
  isSelected(etudiant: Student): boolean {
    return this.selectedEtudiant && this.selectedEtudiant.id === etudiant.id;
  }
}
