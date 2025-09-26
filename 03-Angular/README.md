# Module 03 - Angular

Ce module couvre le framework Angular pour le développement d'applications web modernes et robustes.

## 🎯 Objectifs du Module

- Comprendre l'architecture Angular et ses concepts clés
- Maîtriser les composants, services et injection de dépendances
- Implémenter le routing et les formulaires réactifs
- Utiliser les observables RxJS et HTTP client
- Écrire des tests unitaires et end-to-end

## 📚 TPs Inclus

### TP1 - Getting Started
**Durée :** 4h  
**Objectifs :**
- Installation d'Angular CLI
- Création et structure d'un projet
- Architecture Angular (modules, composants)
- Data binding (interpolation, property, event)
- Directives structurelles (*ngIf, *ngFor)
- Pipes built-in et personnalisés

### TP2 - Composants et Services
**Durée :** 4h  
**Objectifs :**
- Lifecycle hooks des composants
- Communication entre composants (@Input, @Output)
- ViewChild et ContentChild
- Services et injection de dépendances
- Singleton services et providedIn
- Observables pour la communication

### TP3 - Routing et Formulaires
**Durée :** 5h  
**Objectifs :**
- Configuration du routeur Angular
- Navigation et paramètres de route
- Guards (CanActivate, CanDeactivate)
- Lazy loading des modules
- Formulaires template-driven
- Formulaires réactifs (FormBuilder, Validators)

### TP4 - HTTP et RxJS
**Durée :** 4h  
**Objectifs :**
- HttpClient et interceptors
- Gestion des erreurs HTTP
- Observables et opérateurs RxJS
- Async pipe
- State management simple
- Optimisation des requêtes

### TP5 - Testing
**Durée :** 3h  
**Objectifs :**
- Tests unitaires avec Jasmine/Karma
- TestBed et configuration de tests
- Mocking des services et HTTP
- Tests de composants et services
- Tests end-to-end avec Protractor/Cypress
- Coverage des tests

## 🛠️ Outils Utilisés

- **Angular CLI** - Outils de développement
- **TypeScript** - Langage principal
- **RxJS** - Programmation réactive
- **Jasmine/Karma** - Tests unitaires
- **Protractor/Cypress** - Tests e2e
- **Angular DevTools** - Debugging

## 🚀 Installation

```bash
# Installation globale d'Angular CLI
npm install -g @angular/cli

# Dans le module Angular
cd 03-Angular
npm install
```

## 📝 Scripts Disponibles

```bash
# Développement
ng serve                   # Serveur de développement
ng build                   # Build production
ng build --prod            # Build optimisé

# Tests
ng test                    # Tests unitaires
ng test --watch=false      # Tests une fois
ng test --code-coverage    # Tests avec couverture
ng e2e                     # Tests end-to-end

# Génération
ng generate component <name>    # Nouveau composant
ng generate service <name>      # Nouveau service
ng generate module <name>       # Nouveau module

# Qualité
ng lint                    # Linter le code
ng lint --fix              # Corriger automatiquement
```

## 🏗️ Architecture Recommandée

```
src/
├── app/
│   ├── core/              # Services singleton
│   ├── shared/            # Composants partagés
│   ├── features/          # Modules fonctionnels
│   │   ├── feature1/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── feature1.module.ts
│   ├── layout/            # Composants de layout
│   └── app.module.ts
├── assets/                # Ressources statiques
├── environments/          # Configuration environnements
└── styles/               # Styles globaux
```

## 📖 Concepts Clés

### Components
- Lifecycle hooks
- Data binding
- Input/Output properties
- ViewChild/ContentChild

### Services
- Dependency Injection
- Hierarchical injectors
- providedIn metadata

### Routing
- Route configuration
- Navigation guards
- Lazy loading
- Route parameters

### Forms
- Template-driven forms
- Reactive forms
- Validation
- Custom validators

### HTTP
- HttpClient
- Interceptors
- Error handling
- Testing HTTP

## 📚 Ressources

- [Angular Documentation](https://angular.io/docs)
- [Angular CLI Reference](https://angular.io/cli)
- [RxJS Documentation](https://rxjs.dev/)
- [Angular University](https://angular-university.io/)
- [Angular in Depth](https://indepth.dev/angular)

## ✅ Évaluation

Critères d'évaluation :
- **Architecture** (35%) - Structure et organisation du code
- **Fonctionnalités** (35%) - Implémentation correcte des features
- **Tests** (20%) - Couverture et qualité des tests
- **Bonnes pratiques** (10%) - Respect des conventions Angular