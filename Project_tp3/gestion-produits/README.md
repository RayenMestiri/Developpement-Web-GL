# TP3 - Data Binding et Interpolation

## 📚 Description

Projet Angular complet pour le **TP3 : Data Binding et Interpolation**. Ce projet démontre tous les types de liaison de données (data binding) en Angular à travers des activités pratiques et un projet de quiz interactif.

## 🎯 Objectifs Pédagogiques

Ce TP couvre les concepts suivants :

### Section I - Introduction
- Comprendre les différents types de data binding en Angular
- Maîtriser l'interpolation avec les doubles accolades `{{ }}`

### Section II - Ateliers Pratiques (8 Activités)

1. **Activité 1 : Interpolation**
   - Affichage de propriétés TypeScript dans le template HTML
   - Composant : `bienvenue`

2. **Activité 2 : Property Binding (Liaison de Propriété)**
   - Liaison unidirectionnelle avec la syntaxe `[property]="value"`
   - Exemple : `[src]` pour afficher une image
   - Composant : `produit`

3. **Activité 3 : Event Binding (Liaison d'Événement)**
   - Gestion des événements utilisateur avec `(event)="handler()"`
   - Exemple : `(click)` pour gérer les clics
   - Composant : `produit`

4. **Activité 4 : Two-Way Binding (Liaison Bidirectionnelle)**
   - Synchronisation automatique avec `[(ngModel)]`
   - Formulaires dynamiques
   - Composant : `utilisateur`

5. **Activité 5 : Class & Style Binding**
   - Liaison de classes CSS : `[ngClass]`
   - Liaison de styles : `[ngStyle]`
   - Styles conditionnels
   - Composant : `produit`

6. **Activité 6 : Communication Parent → Enfant**
   - Utilisation du décorateur `@Input()`
   - Passage de données du composant parent vers l'enfant
   - Composant : `panier`

7. **Activité 7 : Communication Parent → Enfant (Suite)**
   - Passage de propriétés personnalisées avec `@Input()`
   - Composant : `produit` (propriété `nomProduit`)

8. **Activité 8 : Pipes**
   - Transformation de données dans les templates
   - Exemple : `currency` pour formater les prix
   - Composant : `produit`

### Section III - Atelier Guidé
- Intégration de tous les concepts dans l'application principale
- Communication entre composants avec `@Output()` et `EventEmitter`

### Section IV - Projet Quiz
- Application de quiz interactive complète
- Gestion de l'état avec property binding
- Interaction utilisateur avec event binding
- Affichage dynamique avec interpolation
- Composants : `home`, `game`, `score`

## 🚀 Installation

### Prérequis
- Node.js (v18+)
- Angular CLI (`npm install -g @angular/cli`)

### Étapes d'installation

1. **Naviguer dans le dossier du projet**
   ```powershell
   cd "c:\Users\Legion\OneDrive\Desktop\cycle ingenieur\angular\Project_tp3\gestion-produits"
   ```

2. **Installer les dépendances**
   ```powershell
   npm install
   ```

3. **Lancer le serveur de développement**
   ```powershell
   npm start
   # ou
   ng serve
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:4200
   ```

## 📁 Structure du Projet

```
gestion-produits/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── bienvenue/          # Activité 1 : Interpolation
│   │   │   │   ├── bienvenue.ts
│   │   │   │   ├── bienvenue.html
│   │   │   │   └── bienvenue.css
│   │   │   ├── produit/            # Activités 2,3,5,7,8
│   │   │   │   ├── produit.ts       # Property, Event, Class/Style Binding
│   │   │   │   ├── produit.html     # @Input, @Output, Pipes
│   │   │   │   └── produit.css
│   │   │   ├── utilisateur/        # Activité 4 : Two-Way Binding
│   │   │   │   ├── utilisateur.ts
│   │   │   │   ├── utilisateur.html # [(ngModel)]
│   │   │   │   └── utilisateur.css
│   │   │   └── panier/             # Activité 6 : @Input
│   │   │       ├── panier.ts
│   │   │       ├── panier.html
│   │   │       └── panier.css
│   │   ├── quiz/
│   │   │   ├── home/               # Écran d'accueil du quiz
│   │   │   │   ├── home.ts
│   │   │   │   ├── home.html
│   │   │   │   └── home.css
│   │   │   ├── game/               # Jeu de quiz principal
│   │   │   │   ├── game.ts         # Logique des questions
│   │   │   │   ├── game.html       # Affichage interactif
│   │   │   │   └── game.css
│   │   │   └── score/              # Affichage du score
│   │   │       ├── score.ts
│   │   │       ├── score.html
│   │   │       └── score.css
│   │   ├── app.ts                  # Composant racine
│   │   ├── app.html                # Template principal
│   │   ├── app.css                 # Styles de l'app
│   │   └── app-module.ts           # Module principal
│   ├── assets/
│   │   └── produit.svg             # Image placeholder
│   ├── styles.css                  # Styles globaux
│   └── index.html
├── angular.json
├── package.json
└── README.md
```

## 🎮 Utilisation du Quiz

### Règles du Quiz
- **3 questions** au total
- **+10 points** pour chaque bonne réponse ✅
- **-5 points** pour chaque mauvaise réponse ❌
- Score minimum : 0 points
- Une seule tentative par question

### Fonctionnalités
- ✅ Affichage dynamique des questions
- ✅ Sélection des options avec feedback visuel
- ✅ Calcul automatique du score
- ✅ Compteurs de bonnes/mauvaises réponses
- ✅ Écran de résultats final
- ✅ Possibilité de recommencer

## 🔧 Concepts Techniques Démontrés

### 1. Interpolation
```typescript
// TypeScript
message: string = 'Bienvenue !';

// HTML
<h1>{{ message }}</h1>
```

### 2. Property Binding
```typescript
// TypeScript
imageUrl: string = '/assets/produit.svg';

// HTML
<img [src]="imageUrl" />
```

### 3. Event Binding
```typescript
// TypeScript
toggleStock() {
  this.enStock = !this.enStock;
}

// HTML
<button (click)="toggleStock()">Basculer</button>
```

### 4. Two-Way Binding
```typescript
// TypeScript (FormsModule requis)
nom: string = '';

// HTML
<input [(ngModel)]="nom" />
<p>Nom : {{ nom }}</p>
```

### 5. Class & Style Binding
```typescript
// HTML
<div [ngClass]="{'en-stock': enStock, 'hors-stock': !enStock}">
<div [ngStyle]="{'color': enStock ? 'green' : 'red'}">
```

### 6. @Input (Parent → Enfant)
```typescript
// Enfant
@Input() items: string[] = [];

// Parent HTML
<app-panier [items]="panierItems"></app-panier>
```

### 7. @Output (Enfant → Parent)
```typescript
// Enfant
@Output() ajouterAuPanier = new EventEmitter<string>();
this.ajouterAuPanier.emit(nomProduit);

// Parent HTML
<app-produit (ajouterAuPanier)="gererAjoutAuPanier($event)"></app-produit>
```

### 8. Pipes
```typescript
// HTML
<p>Prix : {{ prix | currency:'EUR' }}</p>
```

## 📦 Dépendances

- **Angular** : Framework principal (v20.x)
- **FormsModule** : Pour le two-way binding avec `[(ngModel)]`
- **TypeScript** : Langage de programmation

## 🧪 Tests

Pour exécuter les tests unitaires :
```powershell
ng test
```

## 🌐 Navigation

L'application contient plusieurs sections accessibles dans une seule page :

1. **Bienvenue** : Message d'accueil avec interpolation
2. **Produits** : 3 produits démontrant tous les bindings
3. **Panier** : Liste des produits ajoutés
4. **Formulaire** : Saisie utilisateur avec two-way binding
5. **Quiz** : Jeu interactif avec scoring

## 🎨 Design

- **Palette de couleurs** : Dégradé violet-bleu (`#667eea` → `#764ba2`)
- **Police** : Poppins (Google Fonts)
- **Animations** : Transitions fluides et effets hover
- **Responsive** : Compatible mobile et desktop

## 📝 Notes de Développement

### Mode Non-Standalone
Ce projet utilise le mode **non-standalone** (modules classiques) conformément aux exigences du TP :
- Tous les composants sont déclarés dans `app-module.ts`
- FormsModule importé pour `ngModel`
- Architecture modulaire traditionnelle

### Bonnes Pratiques Appliquées
- ✅ Séparation des responsabilités (HTML/CSS/TS)
- ✅ Nommage cohérent des composants
- ✅ Commentaires explicatifs dans le code
- ✅ Typage strict avec TypeScript
- ✅ Communication unidirectionnelle des données

## 🐛 Résolution de Problèmes

### Erreur : "Can't bind to 'ngModel'"
**Solution** : Vérifier que `FormsModule` est importé dans `app-module.ts`

### Image du produit ne s'affiche pas
**Solution** : Vérifier que `produit.svg` existe dans `src/assets/`

### Le quiz ne démarre pas
**Solution** : Vérifier que `showGame` est bien à `false` initialement dans `home.ts`

## 👨‍💻 Auteur

Projet réalisé dans le cadre du **TP3 - Data Binding et Interpolation**  
Module : Angular - Cycle Ingénieur

## 📄 Licence

Usage académique uniquement.

---

**Bon apprentissage avec Angular ! 🚀**
