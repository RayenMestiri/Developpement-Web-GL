# Structure du Projet - Développement Web GL

## 📁 Organisation Générale

```
Developpement-Web-GL/
├── 📂 01-JavaScript-avance/          # Module JavaScript ES6+
│   ├── 📄 README.md                  # Guide du module
│   ├── 📄 package.json               # Dépendances JavaScript
│   ├── TP1-ES6-Features/             # Fonctionnalités ES6+
│   │   ├── src/                      # Code source
│   │   ├── tests/                    # Tests unitaires
│   │   ├── index.html                # Demo navigateur
│   │   └── README.md                 # Instructions TP
│   ├── TP2-Async-Programming/        # Programmation asynchrone
│   ├── TP3-DOM-Manipulation/         # Manipulation DOM
│   └── TP4-Modules-Bundling/         # Modules et bundling
│
├── 📂 02-TypeScript/                 # Module TypeScript
│   ├── 📄 README.md                  # Guide du module
│   ├── 📄 package.json               # Dépendances TypeScript
│   ├── 📄 tsconfig.json              # Configuration TypeScript
│   ├── TP1-Types-Interfaces/         # Types et interfaces
│   │   ├── src/                      # Code source TypeScript
│   │   ├── tests/                    # Tests avec Jest
│   │   └── README.md                 # Instructions TP
│   ├── TP2-Classes-Generics/         # Classes et génériques
│   ├── TP3-Decorators/               # Décorateurs
│   └── TP4-Advanced-Types/           # Types avancés
│
├── 📂 03-Angular/                    # Module Angular
│   ├── 📄 README.md                  # Guide du module
│   ├── TP1-Getting-Started/          # Démarrage Angular
│   │   ├── src/app/                  # Application Angular
│   │   ├── angular.json              # Configuration Angular
│   │   ├── package.json              # Dépendances Angular
│   │   └── README.md                 # Instructions TP
│   ├── TP2-Components-Services/      # Composants et services
│   ├── TP3-Routing-Forms/            # Routing et formulaires
│   ├── TP4-HTTP-RxJS/               # HTTP et RxJS
│   └── TP5-Testing/                  # Tests Angular
│
├── 📂 04-NextJS/                     # Module Next.js
│   ├── 📄 README.md                  # Guide du module
│   ├── TP1-Setup-Routing/            # Configuration et routing
│   │   ├── pages/                    # Pages Next.js
│   │   ├── components/               # Composants React
│   │   ├── next.config.js            # Configuration Next.js
│   │   ├── package.json              # Dépendances Next.js
│   │   └── README.md                 # Instructions TP
│   ├── TP2-SSR-SSG/                 # SSR et SSG
│   ├── TP3-API-Routes/              # Routes API
│   ├── TP4-Authentication/          # Authentification
│   └── TP5-Deployment/              # Déploiement
│
├── 📂 05-Projet-fil-rouge/          # Projet intégrateur
│   ├── backend/                      # API backend
│   │   ├── src/                      # Code source backend
│   │   ├── tests/                    # Tests backend
│   │   ├── package.json              # Dépendances backend
│   │   └── README.md                 # Documentation backend
│   ├── frontend/                     # Interface utilisateur
│   │   ├── src/                      # Code source frontend
│   │   ├── public/                   # Assets publics
│   │   ├── package.json              # Dépendances frontend
│   │   └── README.md                 # Documentation frontend
│   └── docs/                         # Documentation projet
│       ├── ARCHITECTURE.md           # Architecture système
│       ├── API.md                    # Documentation API
│       └── DEPLOYMENT.md             # Guide déploiement
│
├── 📂 docs/                          # Documentation générale
│   ├── GETTING_STARTED.md            # Guide démarrage
│   ├── PROJECT_STRUCTURE.md          # Structure projet
│   ├── CODING_STANDARDS.md           # Standards de code
│   └── RESOURCES.md                  # Ressources utiles
│
├── 📄 package.json                   # Configuration workspace
├── 📄 .eslintrc.js                   # Configuration ESLint
├── 📄 .prettierrc                    # Configuration Prettier
├── 📄 .gitignore                     # Fichiers ignorés Git
└── 📄 README.md                      # Documentation principale
```

## 🎯 Conventions de Nommage

### Fichiers et Dossiers
- **Modules** : `01-JavaScript-avance`, `02-TypeScript`, etc.
- **TPs** : `TP1-Description`, `TP2-Description`, etc.
- **Fichiers** : `camelCase` pour JavaScript, `kebab-case` pour les autres
- **Tests** : `*.test.js`, `*.spec.ts`

### Code
- **Variables** : `camelCase` (userName, firstName)
- **Constantes** : `UPPER_SNAKE_CASE` (MAX_LENGTH, API_URL)
- **Classes** : `PascalCase` (UserService, HttpClient)
- **Interfaces** : `PascalCase` avec préfixe `I` optionnel (User, IUser)
- **Types** : `PascalCase` (UserType, ResponseData)

## 📦 Gestion des Dépendances

### Workspace Principal
Le `package.json` racine configure un workspace npm/yarn avec :
- Scripts globaux pour tous les modules
- Dépendances communes (linters, outils de build)
- Configuration des workspaces

### Modules Individuels
Chaque module a son propre `package.json` avec :
- Dépendances spécifiques au module
- Scripts de développement et test
- Configuration du module

## 🧪 Tests

### Structure des Tests
```
module/
├── src/
│   └── feature.js
└── tests/
    ├── feature.test.js      # Tests unitaires
    ├── integration.test.js  # Tests d'intégration
    └── __mocks__/          # Mocks pour les tests
```

### Types de Tests
- **Unitaires** : Fonctions et classes isolées
- **Intégration** : Modules combinés
- **End-to-End** : Flux utilisateur complets (Angular/Next.js)

## 🔧 Configuration

### ESLint
Configuration partagée pour tous les modules avec :
- Règles JavaScript ES6+
- Règles TypeScript spécifiques
- Règles Angular et React
- Extensions personnalisées par module

### Prettier
Formatage automatique uniforme :
- Single quotes
- Semi-colons
- Indentation 2 espaces
- Line length 80 caractères

### TypeScript
Configuration modulaire avec :
- `tsconfig.json` de base dans chaque module TypeScript
- Strict mode activé
- Source maps pour debugging
- Paths aliases configurés

## 📚 Documentation

### README Hierarchy
1. **Principal** : Vue d'ensemble du projet
2. **Module** : Guide spécifique au module
3. **TP** : Instructions détaillées du TP

### Documentation Code
- Commentaires JSDoc pour les fonctions publiques
- README pour chaque composant important
- Exemples d'utilisation dans les tests

## 🚀 Workflow de Développement

1. **Setup** : `npm run install:all`
2. **Développement** : Travailler dans le module approprié
3. **Tests** : `npm test` ou tests spécifiques au module
4. **Linting** : `npm run lint` pour vérifier la qualité
5. **Build** : Scripts de build par module
6. **Commit** : Messages conventionnels avec scope