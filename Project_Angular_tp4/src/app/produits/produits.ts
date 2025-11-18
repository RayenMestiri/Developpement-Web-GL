import { Component } from '@angular/core';

/**
 * Interface pour définir la structure d'un produit
 */
interface Produit {
  nom: string;
  stock: number;
  prix?: number;
}

/**
 * Activité 4 : Styles dynamiques avec [ngStyle]
 * Ce composant démontre l'utilisation de [ngStyle] pour appliquer
 * des styles CSS dynamiques en fonction des données du composant
 */
@Component({
  selector: 'app-produits',
  standalone: false,
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
  /**
   * Liste des produits avec leur niveau de stock
   */
  produits: Produit[] = [
    { nom: 'Laptop Dell', stock: 75, prix: 1200 },
    { nom: 'Smartphone Samsung', stock: 45, prix: 800 },
    { nom: 'Tablette iPad', stock: 15, prix: 600 },
    { nom: 'Écouteurs Sony', stock: 120, prix: 150 },
    { nom: 'Clavier Logitech', stock: 8, prix: 80 },
    { nom: 'Souris Gaming', stock: 35, prix: 50 },
    { nom: 'Webcam HD', stock: 52, prix: 90 }
  ];

  /**
   * Propriétés pour l'ajout de nouveaux produits
   */
  nouveauNom: string = '';
  nouveauStock: number = 0;
  nouveauPrix: number = 0;

  /**
   * Méthode pour déterminer la couleur du stock selon son niveau
   * Vert si > 50, Orange si entre 20 et 50, Rouge si < 20
   */
  getStockColor(stock: number): string {
    if (stock > 50) {
      return 'green';  // Stock élevé
    } else if (stock >= 20 && stock <= 50) {
      return 'orange'; // Stock moyen
    } else {
      return 'red';    // Stock faible
    }
  }

  /**
   * Méthode pour obtenir le statut textuel du stock
   */
  getStockStatus(stock: number): string {
    if (stock > 50) {
      return 'Stock élevé ✓';
    } else if (stock >= 20 && stock <= 50) {
      return 'Stock moyen ⚠';
    } else {
      return 'Stock faible ✗';
    }
  }

  /**
   * Méthode pour ajouter un nouveau produit
   */
  ajouterProduit(): void {
    if (this.nouveauNom.trim() && this.nouveauStock >= 0) {
      this.produits.push({
        nom: this.nouveauNom,
        stock: this.nouveauStock,
        prix: this.nouveauPrix
      });
      
      // Réinitialisation du formulaire
      this.nouveauNom = '';
      this.nouveauStock = 0;
      this.nouveauPrix = 0;
    } else {
      alert('Veuillez remplir correctement tous les champs!');
    }
  }

  /**
   * Méthode pour augmenter le stock d'un produit
   */
  augmenterStock(produit: Produit, quantite: number = 10): void {
    produit.stock += quantite;
  }

  /**
   * Méthode pour diminuer le stock d'un produit
   */
  diminuerStock(produit: Produit, quantite: number = 10): void {
    if (produit.stock >= quantite) {
      produit.stock -= quantite;
    } else {
      alert('Stock insuffisant!');
    }
  }

  /**
   * Méthode pour supprimer un produit
   */
  supprimerProduit(index: number): void {
    if (confirm('Supprimer ce produit?')) {
      this.produits.splice(index, 1);
    }
  }
}
