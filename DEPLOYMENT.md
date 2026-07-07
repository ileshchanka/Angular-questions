# Angular Questions App

Интерактивное приложение для подготовки к собеседованиям по Angular с 150+ вопросами и ответами.

## 🚀 Демо

Приложение опубликовано на GitHub Pages: **[https://ileshchanka.github.io/Angular-questions/](https://ileshchanka.github.io/Angular-questions/)**

## ✨ Возможности

- ✅ **150+ вопросов** по Angular с полными ответами
- 📁 **Фильтрация по категориям** (General, Components, Directives, Forms и т.д.)
- 🎲 **Два режима**: рандомный порядок или последовательно
- 🔍 **Поиск вопроса по ID** для подробного изучения
- 📱 **Адаптивный дизайн** для всех устройств
- ⚡ **Быстрая и реактивная навигация**

## 🛠️ Технологический стек

- **Angular 22** — современный frontend-фреймворк
- **TypeScript** — строгая типизация
- **Signals API** — реактивное управление состоянием
- **RxJS** — работа с асинхронными операциями
- **Vitest** — unit-тестирование

## 🏃 Локальный запуск

### Требования
- Node.js 18+
- npm 11+

### Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/ileshchanka/Angular-questions.git
cd Angular-questions

# Установить зависимости
npm install

# Запустить dev-сервер
npm start

# Открыть http://localhost:4200 в браузере
```

## 📦 Доступные команды

```bash
# Запустить dev-сервер
npm start

# Собрать production-версию
npm run build

# Собрать для GitHub Pages
npm run build:gh-pages

# Задеплоить на GitHub Pages
npm run deploy:gh-pages

# Запустить тесты
npm test

# Watch-режим при разработке
npm run watch
```

## 📋 Как пользоваться приложением

1. **Выбрать категорию** — отфильтровать вопросы по темам (General, Components, Directives и т.д.)
2. **Выбрать режим** — рандомный порядок или последовательно по ID
3. **Выбрать конкретный вопрос** (опционально) — для подробного изучения
4. **Показать/скрыть ответ** — кнопка для отображения ответа
5. **Следующий вопрос** — перейти к следующему вопросу или вернуться в список

## 📝 Структура проекта

```
src/app/
├── app.ts                          # Корневой компонент
├── app.html                        # Корневой шаблон
├── app.css                         # Корневые стили
├── question-answer/                # Компонент вопроса-ответа
│   ├── question-answer.ts          # Логика компонента (Signals API)
│   ├── question-answer.html        # Шаблон с controls
│   ├── question-answer.css         # Стили компонента
│   └── question-answer.spec.ts     # Unit-тесты
├── data/
│   └── questions.ts                # Трансформация вопросов из JSON
└── questions.json                  # База вопросов и ответов (150+ вопросов)
```

## 🔧 Архитектурные решения

### Signals API
Проект использует современный **Signals API** вместо RxJS для локального состояния:
- `signal()` — создание реактивного состояния
- `computed()` — производные значения (автоматически пересчитываются)
- `effect()` — побочные эффекты при изменении сигналов

### Change Detection
Используется стратегия **OnPush** для оптимальной производительности:
```ts
changeDetection: ChangeDetectionStrategy.OnPush
```

### Angular 22 Features
- ✅ Standalone Components (без NgModules)
- ✅ Control Flow (@if, @for вместо *ngIf, *ngFor)
- ✅ New Signals API
- ✅ ES2022 target

## 🧪 Тестирование

Проект использует **Vitest** и **Jasmine**:

```bash
npm test
```

Тесты проверяют:
- Создание компонента
- Скрытие/показ ответов
- Изменение вопросов
- Наличие controls (категория, режим, ID)

## 🚀 Деплой на GitHub Pages

Проект автоматически деплоится на GitHub Pages при выполнении команды:

```bash
npm run deploy:gh-pages
```

Это:
1. Собирает приложение с правильным `baseHref` (`/Angular-questions/`)
2. Деплоит собранные файлы в ветку `gh-pages`
3. GitHub Pages автоматически публикует содержимое

## 📊 Статистика

- **150+ вопросов** по Angular (v16-v22)
- **8 категорий**: General, Components, Directives, Dependency Injection, Forms, HTTP, Lazy Loading, Routing, RxJS, Signals, Tests
- **Полные ответы** с примерами кода
- **Адаптивный UI** для всех экранов

## 📚 Содержание вопросов

Вопросы охватывают все основные аспекты Angular:
- Основы и архитектура
- Компоненты и директивы
- Внедрение зависимостей
- Формы
- HTTP-запросы
- Маршрутизация и ленивая загрузка
- RxJS и реактивность
- Signals API
- Тестирование
- И многое другое

## 🤝 Внесение изменений

Хотите добавить вопросы?

1. Отредактируйте `src/app/questions.json`
2. Запустите `npm start` для проверки
3. Запустите тесты: `npm test`
4. Сделайте commit и push
5. Выполните `npm run deploy:gh-pages`

## 📄 Лицензия

Проект открыт для использования в образовательных целях.

## 👤 Автор

**ileshchanka** — разработчик и подготовка контента к собеседованиям по Angular.

---

**Готово к использованию!** 🎉

На GitHub Pages: https://ileshchanka.github.io/Angular-questions/

