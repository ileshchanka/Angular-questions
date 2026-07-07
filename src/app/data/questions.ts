import questionsData from '../questions.json';

export interface QaItem {
  question: string;
  answer: string;
}

export const QUESTIONS: QaItem[] = questionsData.map(item => ({
  question: item.question,
  answer: item.answer
}));

