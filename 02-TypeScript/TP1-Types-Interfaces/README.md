# TP1 - Types et Interfaces

## 🎯 Objectifs

Ce TP vous introduit aux concepts fondamentaux du typage TypeScript et à la création d'interfaces pour structurer vos données.

## 📋 Exercices

### Exercice 1 - Types Primitifs
- Déclarer des variables avec les types `string`, `number`, `boolean`
- Utiliser les types `null`, `undefined`, `void`
- Comprendre `any`, `unknown`, et `never`

### Exercice 2 - Types Union et Intersection  
- Créer des types union avec `|`
- Combiner des types avec intersection `&`
- Utiliser les type guards pour la vérification

### Exercice 3 - Interfaces
- Définir des interfaces pour des objets
- Propriétés optionnelles avec `?`
- Propriétés en lecture seule avec `readonly`

### Exercice 4 - Types Avancés
- Index signatures `[key: string]: type`
- Extending interfaces
- Interface vs Type aliases

## 🚀 Pour Commencer

```bash
cd TP1-Types-Interfaces
npm install
npm run dev
```

## 📝 À Implémenter

1. Créer une interface `User` avec les propriétés appropriées
2. Implémenter des fonctions avec typage strict
3. Utiliser les union types pour la gestion d'erreurs
4. Créer des types personnalisés avec type aliases

## ✅ Critères de Réussite

- [ ] Types primitifs utilisés correctement
- [ ] Interfaces bien définies  
- [ ] Union types appropriés
- [ ] Type guards implémentés
- [ ] Pas d'utilisation de `any` (sauf cas justifiés)
- [ ] Compilation sans erreurs
- [ ] Tests passants