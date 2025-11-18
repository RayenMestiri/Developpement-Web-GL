/**
 * Composant Home - Page d'accueil du Quiz
 * TP3 - Projet Quiz
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  showGame: boolean = false;

  startQuiz(): void {
    this.showGame = true;
  }

  resetQuiz(): void {
    this.showGame = false;
  }
}
