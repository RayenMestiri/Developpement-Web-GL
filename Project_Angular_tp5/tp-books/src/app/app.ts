/**
 * Composant principal de l'application
 * Partie 0 - Point 2 : Effacer le contenu de app.html
 * Partie 1 - Point 5 : Utiliser book-container comme composant principal
 */
import { Component } from '@angular/core';
import { BookContainer } from './book-container/book-container';

@Component({
  selector: 'app-root',
  imports: [BookContainer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  title = 'Book Catalog - Angular 20';
}
