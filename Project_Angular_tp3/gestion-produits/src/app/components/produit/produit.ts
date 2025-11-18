/**
 * Composant Produit - Activités 2, 3, 5, 7, 8
 * TP3 - Data Binding et Interpolation
 * Property Binding, Event Binding, Class/Style Binding, @Input, @Output, Pipes
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produit',
  standalone: false,
  templateUrl: './produit.html',
  styleUrls: ['./produit.css']
})
export class Produit {
  // Activité 2.2 : Property Binding - URL de l'image
  imageUrl: string = '/assets/produit.svg';

  // Activité 5.1 : Propriété booléenne pour le stock
  enStock: boolean = true;

  // Activité 7.1 : @Input pour recevoir le nom du produit depuis le parent
  @Input() nomProduit: string = 'Produit Par Défaut';

  // Activité 8.1 : Propriété prix pour démonstration des pipes
  prix: number = 99.99;

  // Communication avec le composant parent via @Output
  @Output() ajouterAuPanier = new EventEmitter<string>();

  // Activité 3.1 : Event Binding - Méthode pour afficher une alerte
  afficherAlerte(): void {
    alert('Produit ajouté au panier');
  }

  // Activité 5.5 : Méthode pour basculer l'état du stock
  toggleStock(): void {
    this.enStock = !this.enStock;
  }

  // Méthode pour émettre l'événement d'ajout au panier
  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
  }
}
