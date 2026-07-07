import { Component } from '@angular/core';
import { QuestionAnswer } from './question-answer/question-answer';

@Component({
  selector: 'app-root',
  imports: [QuestionAnswer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
