# Module 01 - JavaScript Avancé

Ce module couvre les fonctionnalités avancées de JavaScript moderne (ES6+) et les concepts essentiels pour le développement web.

## 🎯 Objectifs du Module

- Maîtriser les fonctionnalités ES6+ (let/const, arrow functions, destructuring, etc.)
- Comprendre la programmation asynchrone (Promises, async/await)
- Manipuler efficacement le DOM
- Organiser le code avec les modules ES6
- Utiliser les outils de build et bundling

## 📚 TPs Inclus

### TP1 - Fonctionnalités ES6+
**Durée :** 3h  
**Objectifs :**
- Variables (let, const) vs var
- Arrow functions et binding
- Template literals
- Destructuring (objects, arrays)
- Spread operator et rest parameters
- Classes ES6
- Modules import/export

### TP2 - Programmation Asynchrone
**Durée :** 4h  
**Objectifs :**
- Callbacks et callback hell
- Promises (création, chaînage, gestion d'erreurs)
- async/await
- Promise.all(), Promise.race()
- Fetch API
- Gestion des erreurs asynchrones

### TP3 - Manipulation du DOM
**Durée :** 3h  
**Objectifs :**
- Sélection d'éléments (querySelector, getElementById)
- Création et modification d'éléments
- Gestion des événements
- Event delegation
- Manipulation des styles et classes
- Local Storage et Session Storage

### TP4 - Modules et Bundling
**Durée :** 3h  
**Objectifs :**
- Système de modules ES6
- CommonJS vs ES6 modules
- Introduction à Webpack
- Configuration de base
- Plugins et loaders
- Tree shaking

## 🛠️ Outils Utilisés

- **Node.js** - Environnement d'exécution
- **Babel** - Transpilation ES6+
- **Webpack** - Module bundler
- **Jest** - Framework de tests
- **ESLint** - Linter JavaScript
- **Prettier** - Formatage de code

## 🚀 Installation

```bash
cd 01-JavaScript-avance
npm install
```

## 📝 Scripts Disponibles

```bash
# Tests
npm test                    # Lancer tous les tests
npm run test:watch         # Tests en mode watch
npm run test:coverage      # Tests avec coverage

# Build
npm run build              # Build production
npm run build:dev          # Build développement

# Développement
npm run dev                # Serveur de développement
npm run lint               # Linter le code
npm run format             # Formater le code
```

## 📖 Ressources

- [MDN JavaScript Guide](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide)
- [ES6 Features](http://es6-features.org/)
- [JavaScript.info](https://javascript.info/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

## ✅ Évaluation

Chaque TP sera évalué sur :
- **Fonctionnalité** (40%) - Le code fonctionne correctement
- **Qualité du code** (30%) - Respect des bonnes pratiques
- **Tests** (20%) - Tests unitaires et couverture
- **Documentation** (10%) - README et commentaires