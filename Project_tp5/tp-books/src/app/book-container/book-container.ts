/**
 * Composant BookContainer - Composant parent principal
 * Partie 2 - Données (Points 6, 7)
 * Partie 6 - CREATE (Point 14)
 * Partie 8 - DELETE (Point 17)
 * Partie 9 - UPDATE (Point 18)
 */
import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { BookForm } from '../book-form/book-form';
import { BookList } from '../book-list/book-list';

@Component({
  selector: 'app-book-container',
  imports: [BookForm, BookList],
  templateUrl: './book-container.html',
  styleUrl: './book-container.css',
  standalone: true
})
export class BookContainer {
  // Partie 2 - Point 6 : Liste initiale de livres
  books: Book[] = [
    new Book(
      1,
      'Le Petit Prince',
      'Antoine de Saint-Exupéry',
      'gallimard@publisher.com',
      '71234567',
      '1943-04-06',
      'Roman',
      true,
      15
    ),
    new Book(
      2,
      'Une brève histoire du temps',
      'Stephen Hawking',
      'bantam@publisher.com',
      '71234568',
      '1988-03-01',
      'Science',
      true,
      8
    ),
    new Book(
      3,
      'Sapiens',
      'Yuval Noah Harari',
      'harper@publisher.com',
      '71234569',
      '2011-09-04',
      'Histoire',
      false,
      0
    ),
    new Book(
      4,
      'Clean Code',
      'Robert C. Martin',
      'pearson@publisher.com',
      '71234570',
      '2008-08-01',
      'Informatique',
      true,
      12
    ),
    new Book(
      5,
      'L\'Art de la guerre',
      'Sun Tzu',
      'flammarion@publisher.com',
      '71234571',
      '1972-01-01',
      'Histoire',
      true,
      20
    )
  ];

  // Partie 2 - Point 7 : Tableau de catégories
  categories: string[] = [
    'Roman',
    'Science',
    'Histoire',
    'Informatique',
    'Art',
    'Autres'
  ];

  // Livre actuellement en cours d'édition
  bookToEdit: Book | null = null;

  // Partie 6 - Point 14 : Ajouter un nouveau livre (CREATE)
  addBook(book: Book): void {
    // Générer automatiquement l'ID
    const newId = this.books.length > 0 
      ? Math.max(...this.books.map(b => b.id)) + 1 
      : 1;
    
    book.id = newId;
    this.books.push(book);
    console.log('Livre ajouté:', book);
  }

  // Partie 8 - Point 17 : Supprimer un livre (DELETE)
  deleteBook(id: number): void {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      const deletedBook = this.books.splice(index, 1)[0];
      console.log('Livre supprimé:', deletedBook);
      
      // Si on supprime le livre en cours d'édition, annuler l'édition
      if (this.bookToEdit && this.bookToEdit.id === id) {
        this.bookToEdit = null;
      }
    }
  }

  // Partie 9 - Point 18 : Préparer l'édition d'un livre
  editBook(book: Book): void {
    // Créer une copie pour éviter de modifier directement l'original
    this.bookToEdit = { ...book };
    console.log('Livre à éditer:', this.bookToEdit);
  }

  // Partie 9 - Point 19 : Mettre à jour un livre (UPDATE)
  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
      this.bookToEdit = null; // Revenir en mode ajout
      console.log('Livre mis à jour:', updatedBook);
    }
  }

  // Annuler l'édition
  cancelEdit(): void {
    this.bookToEdit = null;
  }
}
