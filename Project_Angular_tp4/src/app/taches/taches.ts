import { Component } from '@angular/core';

/**
 * Interface pour définir la structure d'une tâche
 */
interface Tache {
  description: string;
  statut: boolean; // true = complétée, false = non complétée
  priorite: 'haute' | 'moyenne' | 'basse';
}

/**
 * Activités 5 et 6 : Combinaison de *ngIf, *ngFor, [ngClass] et [ngStyle]
 * Ce composant démontre l'utilisation combinée de toutes les directives
 * pour créer une application de gestion de tâches complète
 */
@Component({
  selector: 'app-taches',
  standalone: false,
  templateUrl: './taches.html',
  styleUrl: './taches.css',
})
export class Taches {
  /**
   * Liste des tâches avec leurs propriétés
   */
  taches: Tache[] = [
    { description: 'Terminer le TP Angular', statut: false, priorite: 'haute' },
    { description: 'Réviser pour l\'examen', statut: false, priorite: 'haute' },
    { description: 'Faire les courses', statut: true, priorite: 'moyenne' },
    { description: 'Appeler le dentiste', statut: false, priorite: 'basse' },
    { description: 'Lire un livre', statut: true, priorite: 'basse' }
  ];

  /**
   * Propriétés pour l'ajout de nouvelles tâches
   */
  nouvelleDescription: string = '';
  nouvellePriorite: 'haute' | 'moyenne' | 'basse' = 'moyenne';

  /**
   * Propriété pour le filtre d'affichage
   */
  filtreStatut: 'toutes' | 'completes' | 'incompletes' = 'toutes';

  /**
   * Méthode pour ajouter une nouvelle tâche
   */
  ajouterTache(): void {
    if (this.nouvelleDescription.trim()) {
      this.taches.push({
        description: this.nouvelleDescription,
        statut: false,
        priorite: this.nouvellePriorite
      });
      
      // Réinitialisation
      this.nouvelleDescription = '';
      this.nouvellePriorite = 'moyenne';
    } else {
      alert('Veuillez entrer une description!');
    }
  }

  /**
   * Méthode pour basculer le statut d'une tâche (complétée <-> non complétée)
   * @param tache - La tâche dont on veut changer le statut
   */
  toggleStatut(tache: Tache): void {
    tache.statut = !tache.statut;
  }

  /**
   * Méthode pour supprimer une tâche
   * @param index - L'index de la tâche à supprimer
   */
  supprimerTache(index: number): void {
    if (confirm('Supprimer cette tâche?')) {
      this.taches.splice(index, 1);
    }
  }

  /**
   * Méthode pour obtenir la couleur selon la priorité
   * Rouge pour haute, Orange pour moyenne, Vert pour basse
   */
  getCouleurPriorite(priorite: string): string {
    switch (priorite) {
      case 'haute':
        return 'red';
      case 'moyenne':
        return 'orange';
      case 'basse':
        return 'green';
      default:
        return 'gray';
    }
  }

  /**
   * Méthode pour filtrer les tâches selon leur statut
   */
  getTachesFiltrees(): Tache[] {
    switch (this.filtreStatut) {
      case 'completes':
        return this.taches.filter(t => t.statut);
      case 'incompletes':
        return this.taches.filter(t => !t.statut);
      default:
        return this.taches;
    }
  }

  /**
   * Méthode pour obtenir le nombre de tâches complétées
   */
  getNombreTachesCompletes(): number {
    return this.taches.filter(t => t.statut).length;
  }

  /**
   * Méthode pour obtenir le nombre de tâches incomplètes
   */
  getNombreTachesIncompletes(): number {
    return this.taches.filter(t => !t.statut).length;
  }

  /**
   * Méthode pour marquer toutes les tâches comme complétées
   */
  marquerToutesCompletes(): void {
    this.taches.forEach(t => t.statut = true);
  }

  /**
   * Méthode pour supprimer toutes les tâches complétées
   */
  supprimerTachesCompletes(): void {
    if (confirm('Supprimer toutes les tâches complétées?')) {
      this.taches = this.taches.filter(t => !t.statut);
    }
  }
}
