/**
 * Composant BookForm - Formulaire d'ajout et modification de livres
 * Partie 3 - Formulaire (CREATE & UPDATE) (Point 9)
 * Partie 4 - Validations obligatoires (Point 11)
 * Partie 6 - CREATE (Point 14)
 * Partie 9 - UPDATE (Points 18, 19)
 * Partie 10 - Fonctionnalités avancées (Point 20)
 */
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
  standalone: true
})
export class BookForm implements OnChanges {
  // Partie 3 - Point 9 : Propriétés du formulaire
  @Input() categories: string[] = [];
  @Input() bookToEdit: Book | null = null; // Partie 9 - Point 18
  
  @Output() bookAdded = new EventEmitter<Book>(); // Partie 6 - Point 14
  @Output() bookUpdated = new EventEmitter<Book>(); // Partie 9 - Point 19
  @Output() editCancelled = new EventEmitter<void>();

  // Modèle du formulaire
  book: Book = new Book();
  isEditMode: boolean = false;

  // Partie 9 - Point 18 : Détecter les changements pour précharger le formulaire
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookToEdit'] && this.bookToEdit) {
      // Précharger le formulaire avec les données du livre à éditer
      this.book = { ...this.bookToEdit };
      this.isEditMode = true;
    }
  }

  // Partie 6 - Point 14 & Partie 9 - Point 19 : Soumission du formulaire
  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Partie 10 - Point 20 : Validation personnalisée - titre ne doit pas être que des chiffres
      if (this.isTitleOnlyNumbers(this.book.title)) {
        alert('❌ Le titre ne peut pas être composé uniquement de chiffres !');
        return;
      }

      if (this.isEditMode) {
        // Mode UPDATE
        this.bookUpdated.emit({ ...this.book });
      } else {
        // Mode CREATE
        this.bookAdded.emit({ ...this.book });
      }

      // Partie 6 - Point 14 : Réinitialiser le formulaire
      this.resetForm(form);
    } else {
      alert('⚠️ Veuillez corriger les erreurs dans le formulaire');
    }
  }

  // Réinitialiser le formulaire
  resetForm(form: NgForm): void {
    form.resetForm();
    this.book = new Book();
    this.isEditMode = false;
  }

  // Annuler l'édition
  cancelEdit(): void {
    this.book = new Book();
    this.isEditMode = false;
    this.editCancelled.emit();
  }

  // Partie 10 - Point 20 : Validation personnalisée
  isTitleOnlyNumbers(title: string): boolean {
    return /^\d+$/.test(title.trim());
  }

  // Méthode helper pour afficher les erreurs
  hasError(field: any): boolean {
    return field?.invalid && field?.dirty;
  }

  // Obtenir la date actuelle pour la validation
  getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }
}
