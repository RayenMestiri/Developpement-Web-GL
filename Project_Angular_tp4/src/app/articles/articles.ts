import { Component } from '@angular/core';

/**
 * Interface pour définir la structure d'un article
 */
interface Article {
  titre: string;
  contenu: string;
  importance: 'élevée' | 'moyenne' | 'faible';
}

/**
 * Activités 2 et 3 : Liste d'articles avec *ngFor et classes dynamiques avec [ngClass]
 * Ce composant démontre :
 * - L'utilisation de *ngFor pour itérer sur une liste
 * - L'utilisation de [ngClass] pour appliquer des classes CSS conditionnelles
 */
@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  /**
   * Tableau d'articles avec leurs propriétés
   * Chaque article a un titre, un contenu et un niveau d'importance
   */
  articles: Article[] = [
    { titre: 'LapTop Asus', contenu: 'PC portable haute performance pour professionnels', importance: 'élevée' },
    { titre: 'Laptop Gaming', contenu: 'PC gaming avec carte graphique RTX', importance: 'moyenne' },
    { titre: 'Laptop HP', contenu: 'PC portable bureautique économique', importance: 'faible' }
  ];

  /**
   * Propriétés pour capturer les valeurs des nouveaux articles
   */
  newTitle: string = '';
  newContent: string = '';
  newImportance: 'élevée' | 'moyenne' | 'faible' = 'moyenne';

  /**
   * Méthode pour ajouter un nouvel article à la liste
   * Valide que le titre et le contenu ne sont pas vides
   */
  addArticle(): void {
    // Validation : vérifie que les champs ne sont pas vides
    if (this.newTitle.trim() && this.newContent.trim()) {
      // Ajoute le nouvel article au tableau
      this.articles.push({
        titre: this.newTitle,
        contenu: this.newContent,
        importance: this.newImportance
      });
      
      // Réinitialise les champs du formulaire
      this.newTitle = '';
      this.newContent = '';
      this.newImportance = 'moyenne';
    } else {
      alert('Veuillez remplir tous les champs!');
    }
  }

  /**
   * Méthode pour supprimer un article
   * @param index - Index de l'article à supprimer
   */
  deleteArticle(index: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article?')) {
      this.articles.splice(index, 1);
    }
  }
}
