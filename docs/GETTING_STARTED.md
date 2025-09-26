# Guide de Démarrage - Développement Web GL

## 🚀 Installation Initiale

### Prérequis
- **Node.js** version 18 ou supérieure
- **npm** (inclus avec Node.js) ou **yarn**
- **Git** pour la gestion de version
- Un éditeur de code (VS Code recommandé)

### Extensions VS Code Recommandées
- ES7+ React/Redux/React-Native snippets
- TypeScript Hero
- Angular Language Service
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer

## 📦 Installation du Projet

```bash
# Cloner le repository
git clone https://github.com/RayenMestiri/Developpement-Web-GL.git
cd Developpement-Web-GL

# Installer les dépendances principales
npm install

# Installer toutes les dépendances des modules
npm run install:all
```

## 🗂️ Navigation dans les Modules

### Module JavaScript Avancé
```bash
cd 01-JavaScript-avance
npm install
npm run dev    # Démarre le serveur de développement
```

### Module TypeScript
```bash
cd 02-TypeScript
npm install
npm run dev    # Compile et exécute avec ts-node
```

### Module Angular
```bash
cd 03-Angular
npm install
ng serve       # Démarre l'application Angular
```

### Module Next.js
```bash
cd 04-NextJS
npm install
npm run dev    # Démarre le serveur Next.js
```

## 🧪 Tests et Qualité

### Lancer tous les tests
```bash
npm test                 # Tests de tous les modules
npm run test:coverage    # Tests avec couverture
```

### Linting et formatage
```bash
npm run lint            # Vérifier la qualité du code
npm run format          # Formatter automatiquement
```

## 📝 Workflow de Développement

1. **Branching** : Créez une branche pour chaque TP
   ```bash
   git checkout -b tp1-javascript-es6
   ```

2. **Développement** : Travaillez sur vos exercices

3. **Tests** : Vérifiez que vos tests passent
   ```bash
   npm test
   ```

4. **Commit** : Commitez vos changements
   ```bash
   git add .
   git commit -m "TP1 JavaScript: ES6 features implemented"
   ```

5. **Push** : Poussez votre branche
   ```bash
   git push origin tp1-javascript-es6
   ```

## 🔧 Debugging

### JavaScript/TypeScript
- Utilisez les DevTools du navigateur
- Points d'arrêt dans VS Code avec le debugger intégré
- Console.log pour les traces simples

### Angular
- Angular DevTools (extension Chrome/Firefox)
- ng serve avec source maps activées
- Tests unitaires pour isoler les problèmes

### Next.js
- Next.js a un excellent debugging intégré
- React DevTools pour les composants
- Network tab pour les API calls

## 📚 Ressources Utiles

- [MDN Web Docs](https://developer.mozilla.org/) - Référence JavaScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Angular Docs](https://angular.io/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Can I Use](https://caniuse.com/) - Compatibilité navigateurs

## ❓ Aide et Support

Si vous rencontrez des problèmes :

1. Vérifiez la documentation du module concerné
2. Consultez les tests unitaires pour comprendre le comportement attendu
3. Recherchez dans les issues GitHub du projet
4. Demandez de l'aide sur les forums ou Discord du cours

## 🎯 Conseils pour Réussir

- **Lisez attentivement** les README de chaque TP
- **Testez régulièrement** votre code
- **Commitez souvent** avec des messages clairs
- **Documentez** votre code avec des commentaires
- **Respectez** les conventions de nommage et la structure des dossiers