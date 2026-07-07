# GitHub Pages Setup Complete ✅

## 🎉 Статус деплоя

Ваше приложение Angular-questions успешно залито на GitHub Pages!

### 🌍 URL приложения
- **Основной**: https://ileshchanka.github.io/Angular-questions/
- **GitHub репо**: https://github.com/ileshchanka/Angular-questions

## 📋 Что было сделано

### 1. Установлены зависимости
```bash
npm install --save-dev gh-pages
```

### 2. Настроена сборка для GitHub Pages
**Файл: `angular.json`**
- Добавлена конфигурация `github-pages` с правильным `baseHref: "/Angular-questions/"`
- Выход: `dist/angular-questions-ghpages`

### 3. Добавлены npm-скрипты
**Файл: `package.json`**
```json
{
  "build:gh-pages": "ng build --configuration github-pages",
  "deploy:gh-pages": "npm run build:gh-pages && gh-pages -d dist/angular-questions-ghpages"
}
```

### 4. Выполнен первый деплой
```bash
npm run deploy:gh-pages
```

## 🚀 Как пользоваться

### Обновление приложения и переdeploying

После каждого изменения:

```bash
# 1. Внесите изменения в код
# 2. Протестируйте локально
npm start
npm test

# 3. Задеплойте на GitHub Pages
npm run deploy:gh-pages

# 4. Commit и push на GitHub (опционально)
git add .
git commit -m "Update questions or features"
git push origin main
```

### Проверка статуса

Откройте GitHub:
1. Перейдите в Settings репозитория: https://github.com/ileshchanka/Angular-questions/settings/pages
2. Убедитесь что:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` (должна быть там)
   - **Folder**: `/ (root)`

## 📝 Команды для работы

```bash
# Запустить локально для тестирования
npm start

# Собрать для GitHub Pages (с правильным baseHref)
npm run build:gh-pages

# Выполнить полный деплой (сборка + upload)
npm run deploy:gh-pages

# Запустить тесты
npm test

# Обычная сборка для production
npm run build
```

## 🔍 Структура для gh-pages

```
dist/angular-questions-ghpages/
├── browser/
│   ├── main.js (главная логика приложения)
│   ├── index.html
│   ├── styles.css
│   └── ...
├── 3rdpartylicenses.txt
└── prerendered-routes.json
```

## ⚙️ Настройка в GitHub (уже сделано, но на будущее)

Если нужно перенастроить:

1. Откройте Settings репозитория
2. Перейдите в Pages
3. Выберите:
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Folder: "/ (root)"
4. Сохраните

## 🎯 Доступные действия

### Добавить новые вопросы
1. Отредактируйте `src/app/questions.json`
2. Сохраните, протестируйте локально
3. Выполните `npm run deploy:gh-pages`

### Изменить внешний вид
1. Измените CSS/HTML в компонентах
2. Протестируйте на `npm start`
3. Задеплойте через `npm run deploy:gh-pages`

### Добавить новые категории
1. Обновите `src/app/questions.json` (добавьте category)
2. Компонент автоматически подхватит новые категории
3. Задеплойте

## 📊 Git branches

- **main** — исходный код приложения (обновляется вручную)
- **gh-pages** — скомпилированное приложение (обновляется автоматически через `gh-pages`)

## ⏱️ Время обновления

После деплоя приложение обновляется на GitHub Pages:
- Обычно: 1-2 минуты
- В редких случаях: до 10 минут
- Если долго ждёте: очистите кэш браузера (Ctrl+Shift+Delete или Cmd+Shift+Delete)

## 🔗 Полезные ссылки

- Приложение: https://ileshchanka.github.io/Angular-questions/
- GitHub репозиторий: https://github.com/ileshchanka/Angular-questions
- GitHub Pages Settings: https://github.com/ileshchanka/Angular-questions/settings/pages
- GitHub Pages Docs: https://docs.github.com/en/pages

## ✨ Готово!

Ваше приложение теперь опубликовано и доступно всем!

Для запуска локально или обновления — используйте команды выше.

**Успехов в подготовке к собеседованиям!** 🚀

