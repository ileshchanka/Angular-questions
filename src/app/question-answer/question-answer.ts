import {Component, computed, effect, ElementRef, signal, viewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {type QaItem} from '../data/questions';
import questionsData from '../questions.json';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('bash', bash);

interface QuestionWithId extends QaItem {
  id: number;
  category: string;
}

type Mode = 'sequential' | 'random';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.html',
  styleUrl: './question-answer.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class QuestionAnswer {
  private readonly answerEl = viewChild<ElementRef<HTMLElement>>('answerEl');

  // Signals for UI controls
  protected readonly selectedCategory = signal<string>('All');
  protected readonly selectedQuestionId = signal<number | null>(null);
  protected readonly mode = signal<Mode>('random');
  protected readonly showAnswer = signal(false);
  protected readonly total = computed(() => this.filteredQuestions().length);
  // Get all questions with IDs and categories from JSON
  private readonly allQuestions: QuestionWithId[] = questionsData.map(
    (item: any) => ({
      id: item.id,
      category: item.category || 'General',
      question: item.question,
      answer: item.answer,
    })
  );
  // Computed properties
  protected readonly categories = computed(() => {
    const cats = new Set(this.allQuestions.map(q => q.category));
    return ['All', ...Array.from(cats).sort()];
  });
  protected readonly filteredQuestions = computed(() => {
    const category = this.selectedCategory();
    return category === 'All'
      ? this.allQuestions
      : this.allQuestions.filter(q => q.category === category);
  });
  private readonly order = signal<number[]>([]);
  private readonly position = signal(0);
  protected readonly questionNumber = computed(() => this.position() + 1);

  protected readonly current = computed<QuestionWithId | null>(() => {
    const filtered = this.filteredQuestions();
    const orders = this.order();

    if (filtered.length === 0) return null;
    if (orders.length === 0) return null;

    const index = orders[this.position()];
    return filtered[index] ?? null;
  });

  constructor() {
    // Initialize with random order
    this.initializeQuestions();

    // Highlight code blocks whenever the displayed answer changes
    effect(() => {
      this.current();
      this.showAnswer();
      const el = this.answerEl();
      if (!el) return;
      queueMicrotask(() => {
        el.nativeElement.querySelectorAll<HTMLElement>('pre code').forEach(block => {
          hljs.highlightElement(block);
        });
      });
    });
  }

  protected onCategoryChange(): void {
    this.selectedQuestionId.set(null);
    this.initializeQuestions();
  }

  protected onModeChange(): void {
    this.initializeQuestions();
  }

  protected onQuestionIdChange(): void {
    const questionId = this.selectedQuestionId();
    if (questionId === null) {
      this.initializeQuestions();
      return;
    }

    const filtered = this.filteredQuestions();
    const index = filtered.findIndex(q => q.id === questionId);

    if (index !== -1) {
      this.order.set([index]);
      this.position.set(0);
      this.showAnswer.set(false);
    } else {
      this.selectedQuestionId.set(null);
      this.initializeQuestions();
    }
  }

  protected toggleAnswer(): void {
    this.showAnswer.update(value => !value);
  }

  protected nextQuestion(): void {
    const total = this.total();
    if (total === 0) return;

    // If viewing a specific question, go back to list
    if (this.selectedQuestionId() !== null) {
      this.selectedQuestionId.set(null);
      this.initializeQuestions();
      return;
    }

    this.showAnswer.set(false);
    this.position.update(pos => (pos + 1) % total);
  }

  // Helper method for template to convert string to number
  protected toNumber(value: any): number | null {
    if (value === '' || value === null || value === undefined) {
      return null;
    }
    const num = Number(value);
    return isNaN(num) ? null : num;
  }

  private initializeQuestions(): void {
    const filtered = this.filteredQuestions();
    if (filtered.length === 0) {
      this.order.set([]);
      this.position.set(0);
      return;
    }

    const newOrder = this.createOrder(filtered.length);
    this.order.set(newOrder);
    this.position.set(0);
    this.showAnswer.set(false);
  }

  private createOrder(length: number): number[] {
    if (this.mode() === 'sequential') {
      return Array.from({length}, (_, i) => i);
    }

    // Random order (Fisher-Yates shuffle)
    const indices = Array.from({length}, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }
}




