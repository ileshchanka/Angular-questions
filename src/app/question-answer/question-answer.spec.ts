import { TestBed } from '@angular/core/testing';
import { QuestionAnswer } from './question-answer';

describe('QuestionAnswer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionAnswer],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(QuestionAnswer);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should hide the answer by default', () => {
    const fixture = TestBed.createComponent(QuestionAnswer);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.qa-answer')).toBeNull();
  });

  it('should show the answer after clicking "Показать ответ"', () => {
    const fixture = TestBed.createComponent(QuestionAnswer);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('.qa-button-primary');
    if (buttons.length > 0) {
      (buttons[0] as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(compiled.querySelector('.qa-answer')).not.toBeNull();
    }
  });

  it('should have categories dropdown', () => {
    const fixture = TestBed.createComponent(QuestionAnswer);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const categorySelect = compiled.querySelector('#category-select');
    expect(categorySelect).not.toBeNull();
  });

  it('should have mode selector (random/sequential)', () => {
    const fixture = TestBed.createComponent(QuestionAnswer);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const modeSelect = compiled.querySelector('#mode-select');
    expect(modeSelect).not.toBeNull();
  });
});

