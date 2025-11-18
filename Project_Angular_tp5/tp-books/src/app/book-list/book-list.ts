/**
 * Composant BookList - Affichage de la liste des livres
 * Partie 7 - READ (Points 15, 16)
 * Partie 8 - DELETE (Point 17)
 * Partie 9 - UPDATE (Point 18)
 * Partie 10 - Fonctionnalités avancées (Points 21, 22, 23)
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
  standalone: true
})
export class BookList {
  // Partie 7 - Point 15 : Recevoir la liste via @Input
  @Input() books: Book[] = [];

  // Partie 8 - Point 17 : Événement de suppression
  @Output() bookDeleted = new EventEmitter<number>();

  // Partie 9 - Point 18 : Événement d'édition
  @Output() bookEdited = new EventEmitter<Book>();

  // Partie 10 - Point 21 : Champ de recherche
  searchTerm: string = '';

  // Partie 10 - Point 22 : Tri
  sortBy: string = 'none'; // none, category, available

  // Partie 8 - Point 17 : Supprimer un livre
  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      this.bookDeleted.emit(id);
    }
  }

  // Partie 9 - Point 18 : Éditer un livre
  onEdit(book: Book): void {
    this.bookEdited.emit(book);
  }

  // Partie 10 - Point 21 : Filtrer les livres par recherche
  getFilteredBooks(): Book[] {
    let filtered = this.books;

    // Filtrage par recherche
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term) ||
        book.category.toLowerCase().includes(term)
      );
    }

    // Partie 10 - Point 22 : Tri
    if (this.sortBy === 'category') {
      filtered = [...filtered].sort((a, b) => a.category.localeCompare(b.category));
    } else if (this.sortBy === 'available') {
      filtered = [...filtered].sort((a, b) => {
        if (a.isAvailable === b.isAvailable) return 0;
        return a.isAvailable ? -1 : 1; // Disponibles en premier
      });
    }

    return filtered;
  }

  // Partie 10 - Point 23 : Compteur total de livres
  getTotalBooks(): number {
    return this.books.length;
  }

  // Compteur de livres disponibles
  getAvailableBooks(): number {
    return this.books.filter(book => book.isAvailable).length;
  }

  // Compteur de livres non disponibles
  getUnavailableBooks(): number {
    return this.books.filter(book => !book.isAvailable).length;
  }
}
