# AGENTS.md

## Project state
Freshly scaffolded Angular CLI v22 app (`ng new`) — `src/app/app.ts` is still the
default placeholder component. There is no custom feature code, no backend, and
no routes yet (`app.routes.ts` exports an empty `routes: Routes = []`). When
adding features, follow the conventions below rather than older Angular patterns
you may know from training data — this project uses Angular 22's modern APIs.

## Architecture
- Single application project named `Angular-questions` (see `angular.json`,
  `sourceRoot: "src"`, component prefix `app`).
- Bootstrap flow: `src/main.ts` → `bootstrapApplication(App, appConfig)`.
- `src/app/app.config.ts` is the single place providers are registered
  (`provideBrowserGlobalErrorListeners()`, `provideRouter(routes)`). Add new
  global providers (HttpClient, animations, etc.) here, not in a module —
  **this project has no NgModules**, everything is standalone.
- `src/app/app.routes.ts` holds the route table; it's currently empty. New
  feature routes should be added here and lazy-loaded via
  `loadComponent`/`loadChildren` where practical.
- Root component `App` (`src/app/app.ts`) uses the `signal()` API for state
  (`protected readonly title = signal(...)`), not plain class fields. Follow
  this pattern for component state — use `signal`/`computed` instead of RxJS
  `BehaviorSubject` for simple local state.
- Components are declared with the modern `@Component` decorator and no
  `standalone: true` flag (standalone is the default in Angular 22 — do not
  add `standalone: true`, it's redundant/deprecated).
- Templates use the new built-in control flow syntax (`@for (item of list;
  track item.title) { ... }`), as seen in `app.html`. Use `@if`/`@for`/`@switch`
  instead of `*ngIf`/`*ngFor` structural directives for new templates.

## Developer workflows
- Package manager is **npm** (`packageManager: npm@11.16.0` in `package.json`);
  don't introduce yarn/pnpm lockfiles.
- Dev server: `npm start` (alias for `ng serve`) → http://localhost:4200,
  auto-reloads on save.
- Build: `npm run build` → outputs to `dist/`. Production is the
  `defaultConfiguration` (see `angular.json`); dev build via
  `npm run watch` (`ng build --watch --configuration development`).
- Tests: `npm test` (`ng test`). Test runner is **Vitest**, not
  Karma/Jasmine-runner — configured via the `@angular/build:unit-test`
  builder in `angular.json` (no separate `karma.conf.js`/`vitest.config.ts`
  file; config is inline in the builder). Specs still use
  `describe`/`it`/`expect` and Angular's `TestBed` (see `app.spec.ts`), just
  executed by Vitest under jsdom.
- No e2e framework is configured (`ng e2e` will prompt to choose one).
- Code scaffolding: prefer `ng generate component/service/pipe <name>` over
  hand-writing boilerplate, to keep file naming/style consistent with CLI
  defaults (e.g. `foo.ts`, `foo.html`, `foo.css`, `foo.spec.ts` — note: no
  `.component.ts` suffix, this project uses the CLI's newer flat naming).

## Conventions to preserve
- File naming has **no type suffix**: `app.ts`/`app.html`/`app.css`/`app.spec.ts`
  (not `app.component.ts`). Match this for any new component/service/pipe.
- `tsconfig.json` enables strict-ish compiler flags (`noImplicitOverride`,
  `noPropertyAccessFromIndexSignature`, `noImplicitReturns`,
  `noFallthroughCasesInSwitch`) plus Angular strict flags
  (`strictInjectionParameters`, `strictInputAccessModifiers`). Keep new code
  compliant with these rather than loosening the config.
- Styling: component styles live in a sibling `.css` file referenced via
  `styleUrl` (singular), or inline `<style>` in the template as seen in
  `app.html` — both patterns are present, follow whichever is closer to the
  file you're editing.
- Prettier is a devDependency but no `.prettierrc`/script exists yet — if you
  add formatting rules, wire up a `format` script in `package.json` rather
  than assuming defaults.

