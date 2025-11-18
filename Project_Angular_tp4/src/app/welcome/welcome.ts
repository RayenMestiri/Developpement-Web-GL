import { Component } from '@angular/core';

/**
 * Activité 1 : Affichage conditionnel avec *ngIf
 * Ce composant démontre l'utilisation de la directive structurelle *ngIf
 * pour afficher/masquer des éléments en fonction d'une condition
 */
@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  /**
   * Propriété qui indique si l'utilisateur est connecté
   * false par défaut (utilisateur non connecté)
   */
  isLoggedIn: boolean = false;

  /**
   * Nom d'utilisateur saisi pour la validation
   */
  username: string = '';

  /**
   * Nom attendu pour la connexion (défi)
   */
  expectedName: string = 'Mohamed'; // Changez avec votre prénom

  /**
   * Méthode pour basculer l'état de connexion
   * Inverse la valeur de isLoggedIn (true -> false ou false -> true)
   */
  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }

  /**
   * Méthode pour valider la connexion avec un nom d'utilisateur
   * (DÉFI) : Vérifie si le nom saisi correspond au nom attendu
   */
  login(): void {
    if (this.username.trim().toLowerCase() === this.expectedName.toLowerCase()) {
      this.isLoggedIn = true;
    } else {
      alert('Nom d\'utilisateur incorrect!');
    }
  }

  /**
   * Méthode pour déconnecter l'utilisateur
   */
  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
  }
}
