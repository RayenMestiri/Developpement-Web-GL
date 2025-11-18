import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: false,
  templateUrl: './score.html',
  styleUrl: './score.css',
})
export class Score {
  @Input() score: number = 0;
  @Input() bonnesReponses: number = 0;
  @Input() mauvaisesReponses: number = 0;
}
