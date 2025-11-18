/**
 * Composant Game - Gestion du Quiz
 * TP3 - Projet: Questions, Réponses, Score
 */
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: false,
  templateUrl: './game.html',
  styleUrls: ['./game.css']
})
export class Game {
  @Output() quizFinished = new EventEmitter<void>();

  // Tableau de questions
  questions = [
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique',
      answered: false,
      selectedOption: ''
    },
    {
      question: 'Quelle est la capitale de l\'Algérie ?',
      options: ['Alger', 'Tunis', 'Tanger'],
      reponse: 'Alger',
      answered: false,
      selectedOption: ''
    },
    {
      question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge'],
      reponse: 'Bleu',
      answered: false,
      selectedOption: ''
    }
  ];

  currentQuestionIndex: number = 0;
  score: number = 0;
  bonnesReponses: number = 0;
  mauvaisesReponses: number = 0;
  quizTermine: boolean = false;

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // Event Binding pour gérer la sélection
  onSelectOption(option: string): void {
    if (this.currentQuestion.answered) return;

    this.currentQuestion.selectedOption = option;
    this.currentQuestion.answered = true;

    if (option === this.currentQuestion.reponse) {
      this.score += 10;
      this.bonnesReponses++;
    } else {
      this.score -= 5;
      this.mauvaisesReponses++;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.quizTermine = true;
    }
  }

  restartQuiz(): void {
    this.quizFinished.emit();
  }
}
