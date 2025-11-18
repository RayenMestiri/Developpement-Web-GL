/**
 * Composant Panier - Activité 6
 * TP3 - Communication entre composants avec @Input
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panier',
  standalone: false,
  templateUrl: './panier.html',
  styleUrls: ['./panier.css']
})
export class Panier {
  // Activité 6 : Recevoir la liste des articles via @Input
  @Input() items: string[] = [];
}
