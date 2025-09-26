# Module 02 - TypeScript

Ce module introduit TypeScript, le superset de JavaScript qui ajoute le typage statique et des fonctionnalités orientées objet avancées.

## 🎯 Objectifs du Module

- Comprendre les avantages du typage statique
- Maîtriser les types TypeScript (primitifs, union, intersection)
- Utiliser les interfaces et classes
- Implémenter des génériques
- Comprendre les décorateurs et métadonnées

## 📚 TPs Inclus

### TP1 - Types et Interfaces
**Durée :** 3h  
**Objectifs :**
- Types primitifs (string, number, boolean, etc.)
- Types union et intersection
- Type assertions et guards
- Interfaces et types personnalisés
- Optional et readonly properties
- Index signatures

### TP2 - Classes et Génériques
**Durée :** 4h  
**Objectifs :**
- Classes TypeScript vs ES6
- Modificateurs d'accès (public, private, protected)
- Propriétés statiques et abstraites
- Héritage et polymorphisme
- Génériques (functions, classes, interfaces)
- Contraintes de génériques

### TP3 - Décorateurs
**Durée :** 3h  
**Objectifs :**
- Introduction aux décorateurs
- Décorateurs de classe
- Décorateurs de méthode et propriété
- Décorateurs de paramètre
- Factory functions
- Métadonnées avec reflect-metadata

### TP4 - Types Avancés
**Durée :** 3h  
**Objectifs :**
- Mapped types
- Conditional types
- Utility types (Partial, Pick, Omit, etc.)
- Template literal types
- Module augmentation
- Namespace vs modules

## 🛠️ Outils Utilisés

- **TypeScript** - Compilateur TS
- **ts-node** - Exécution directe TS
- **Jest** - Tests avec support TS
- **TSLint/ESLint** - Linting TypeScript
- **Webpack** - Bundling avec TS
- **Reflect-metadata** - Métadonnées pour décorateurs

## 🚀 Installation

```bash
cd 02-TypeScript
npm install
```

## 📝 Scripts Disponibles

```bash
# Compilation
npm run build              # Compiler vers JavaScript
npm run build:watch        # Compilation en mode watch
npm run dev                # Développement avec ts-node

# Tests
npm test                   # Tests avec Jest
npm run test:watch         # Tests en mode watch
npm run test:coverage      # Coverage des tests

# Qualité
npm run lint               # Linter TypeScript
npm run type-check         # Vérification des types
npm run format             # Formatter le code
```

## 📖 Configuration

### tsconfig.json
Configuration TypeScript optimisée pour l'apprentissage avec :
- Target ES2020
- Module CommonJS/ES6
- Strict mode activé
- Decorators expérimentaux
- Source maps pour debugging

### Jest Configuration
Tests unitaires avec support TypeScript natif.

## 📚 Ressources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Effective TypeScript](https://effectivetypescript.com/)
- [TypeScript Exercises](https://typescript-exercises.github.io/)

## ✅ Évaluation

Critères d'évaluation :
- **Typage correct** (40%) - Utilisation appropriée des types
- **Architecture** (30%) - Organisation et structure du code
- **Fonctionnalités avancées** (20%) - Génériques, décorateurs
- **Tests et documentation** (10%) - Qualité des tests et docs