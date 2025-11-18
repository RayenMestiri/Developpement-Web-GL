/**
 * Composant principal de l'application
 * TP3 - Data Binding et Interpolation
 * Activité 6.4 : Gestion du panier dans le composant parent
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  title = 'TP3 - Data Binding';
  
  // Activité 6.4 : Tableau pour stocker les items du panier
  panierItems: string[] = [];

  // Activité 6.4 : Méthode pour gérer l'ajout au panier
  gererAjoutAuPanier(nomProduit: string): void {
    this.panierItems.push(nomProduit);
    console.log(`${nomProduit} ajouté au panier.`);
  }
}
