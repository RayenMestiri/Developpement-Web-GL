# TP2 - GUIDE DES ACTIVITÉS
## Réponses aux Questions et Validation des Acquis

---

## 📋 SECTION I : ACTIVITÉ 1 - Exploration de la Structure

### Description du rôle de chaque fichier/dossier :

#### **src/app/**
**Rôle :** Contient tout le code source de l'application Angular
- Composants (fichiers .ts, .html, .css)
- Services (logique métier partagée)
- Modules (organisation de l'application)
- Modèles/Interfaces (définition des types de données)
- Guards, Interceptors, Pipes personnalisés

**Pourquoi important ?** C'est le cœur de votre application. Toute la logique métier et l'interface utilisateur se trouvent ici.

#### **src/assets/**
**Rôle :** Stocke les ressources statiques de l'application
- Images (logos, photos, icônes)
- Fichiers JSON (configuration, données mock)
- Polices personnalisées
- Autres fichiers statiques

**Pourquoi important ?** Ces fichiers sont copiés tels quels dans le build de production sans être traités par le compilateur.

#### **src/environments/** (si présent)
**Rôle :** Contient les configurations spécifiques à chaque environnement
- `environment.ts` : Configuration pour le développement
- `environment.prod.ts` : Configuration pour la production
- Variables d'environnement (URLs d'API, clés, etc.)

**Pourquoi important ?** Permet de changer facilement entre environnements dev/prod sans modifier le code.

#### **src/main.ts**
**Rôle :** Point d'entrée principal de l'application Angular
- Bootstrap (démarre) le module racine (AppModule)
- Configure la plateforme Angular
- Initialise l'application dans le navigateur

**Code typique :**
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

**Pourquoi important ?** Sans ce fichier, l'application Angular ne démarre pas !

#### **src/index.html**
**Rôle :** Page HTML principale qui charge l'application
- Contient la balise `<app-root>` où Angular injecte l'application
- Définit les métadonnées HTML (title, charset, viewport)
- Charge les ressources externes si nécessaire

**Exemple :**
```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>ListeEtudiants</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root> <!-- Angular remplace ceci par votre composant -->
</body>
</html>
```

**Pourquoi important ?** C'est le point d'ancrage de toute l'application Angular dans le DOM.

#### **angular.json**
**Rôle :** Fichier de configuration principal d'Angular CLI
- Définit les options de build (compilation, optimisation)
- Configure les chemins des assets, styles, scripts
- Spécifie les configurations pour différents environnements
- Définit les options de test et de serve

**Sections importantes :**
- `projects` : Configuration de chaque projet
- `architect.build` : Options de compilation
- `architect.serve` : Configuration du serveur de dev
- `styles` : Styles globaux à inclure
- `assets` : Fichiers à copier

**Pourquoi important ?** Angular CLI utilise ce fichier pour savoir comment construire et servir votre application.

#### **package.json**
**Rôle :** Manifeste du projet Node.js/npm
- Liste toutes les dépendances (@angular/core, rxjs, etc.)
- Définit les scripts npm (start, build, test)
- Spécifie les versions des packages
- Informations sur le projet (nom, version, auteur)

**Exemple :**
```json
{
  "name": "liste-etudiants",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test"
  },
  "dependencies": {
    "@angular/core": "^20.0.0",
    "@angular/forms": "^20.0.0"
  }
}
```

**Pourquoi important ?** Permet de gérer toutes les dépendances du projet et de les installer avec `npm install`.

#### **tsconfig.json**
**Rôle :** Configuration du compilateur TypeScript
- Options de compilation (target, module, strict)
- Chemins de résolution des modules
- Options de typage strict
- Configuration des décorateurs

**Options importantes :**
- `target: "ES2022"` : Version JavaScript cible
- `strict: true` : Active le typage strict
- `experimentalDecorators: true` : Active les décorateurs (@Component)
- `lib: ["ES2022", "dom"]` : Bibliothèques TypeScript disponibles

**Pourquoi important ?** Définit comment TypeScript compile votre code en JavaScript.

---

## 📋 SECTION II : ACTIVITÉS PRATIQUES

### ACTIVITÉ 2 : Génération et Intégration de Composants

#### Fichiers générés par `ng generate component utilisateur` :

**a) utilisateur.component.ts**
- **Rôle :** Classe TypeScript du composant
- Contient la logique métier (propriétés, méthodes)
- Décorateur @Component avec métadonnées
- Point d'entrée de la logique du composant

**b) utilisateur.component.html**
- **Rôle :** Template HTML du composant
- Définit la structure et l'affichage
- Utilise la syntaxe Angular (interpolation, directives)
- Liaison avec les propriétés du .ts

**c) utilisateur.component.css**
- **Rôle :** Styles CSS privés du composant
- Styles encapsulés (ne s'appliquent qu'à ce composant)
- Isolation des styles pour éviter les conflits
- CSS scoped automatiquement par Angular

**d) utilisateur.component.spec.ts**
- **Rôle :** Fichier de tests unitaires
- Tests Jasmine pour le composant
- Vérifie le comportement et le rendu
- Exécuté par `ng test`

**e) app.module.ts (mis à jour)**
- **Rôle :** Déclaration automatique du nouveau composant
- Angular CLI ajoute le composant au tableau `declarations`
- Permet d'utiliser le composant dans l'application
- Mise à jour automatique des imports

### ACTIVITÉ 4 : Comprendre le rôle du FormsModule

#### Pourquoi FormsModule est nécessaire ?

**Sans FormsModule :**
```
ERROR: Can't bind to 'ngModel' since it isn't a known property of 'input'.
```

**Raisons :**

1. **ngModel n'est pas dans @angular/core**
   - C'est une directive optionnelle
   - Se trouve dans le package @angular/forms
   - Ne fait pas partie du module BrowserModule

2. **Architecture modulaire d'Angular**
   - Angular divise les fonctionnalités en modules
   - Permet de charger uniquement ce dont on a besoin
   - Réduit la taille du bundle final

3. **FormsModule fournit :**
   - La directive `ngModel` pour la liaison bidirectionnelle
   - La directive `ngForm` pour les formulaires
   - Les validateurs de formulaires
   - Le suivi de l'état des contrôles (touched, dirty, valid)

#### Rôle de AppModule

**AppModule est le module racine** qui :

1. **Déclare les composants**
   ```typescript
   declarations: [AppComponent, UtilisateurComponent]
   ```
   - Rend les composants disponibles dans le module
   - Sans déclaration, Angular ne reconnaît pas le composant

2. **Importe les modules nécessaires**
   ```typescript
   imports: [BrowserModule, FormsModule]
   ```
   - Ajoute les fonctionnalités d'autres modules
   - BrowserModule : fonctionnalités de base du navigateur
   - FormsModule : gestion des formulaires

3. **Fournit les services**
   ```typescript
   providers: [MesServices]
   ```
   - Services disponibles dans toute l'application
   - Injection de dépendances

4. **Bootstrap le composant racine**
   ```typescript
   bootstrap: [AppComponent]
   ```
   - Définit le composant à charger au démarrage

### ACTIVITÉ 5 : Déclaration Manuelle de Composants

#### Pourquoi déclarer les composants ?

**Sans déclaration :**
```
ERROR: 'app-adresse' is not a known element
```

**Raisons :**

1. **Angular ne devine pas**
   - Angular ne scanne pas automatiquement les dossiers
   - Vous devez explicitement indiquer quels composants existent

2. **Compilation AOT**
   - Angular compile les templates en avance (Ahead-of-Time)
   - Doit connaître tous les composants à la compilation
   - Optimisation des performances

3. **Isolation des modules**
   - Les composants sont privés à leur module
   - Permet une meilleure organisation
   - Évite les conflits de noms

#### Rôle du tableau `declarations`

```typescript
@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    ProfilComponent,
    EtudiantComponent,
    AdresseComponent  // Sans ceci, erreur!
  ]
})
```

**Le tableau declarations :**
- ✅ Enregistre les composants dans le module
- ✅ Rend les sélecteurs disponibles dans les templates
- ✅ Permet la compilation des templates
- ✅ Active l'encapsulation des styles
- ❌ Un composant ne peut être déclaré que dans UN SEUL module

---

## 📋 SECTION III : ATELIER GUIDÉ

### Questions sur les Interfaces TypeScript

#### Export
**`export`** : Mot-clé qui rend l'interface accessible depuis d'autres fichiers
```typescript
export interface Student { ... }  // Peut être importé ailleurs
```

Sans `export`, l'interface serait privée au fichier actuel.

#### Interface
**`interface`** : Définit un contrat/structure de données en TypeScript
- Typage fort pour les objets
- Vérification à la compilation
- Pas de code généré (supprimé après compilation)
- Sert uniquement au développement

```typescript
interface Student {
  id: number;
  name: string;
}
```

#### Différences de déclaration :

**a) `name: string`** - Propriété **OBLIGATOIRE**
```typescript
interface Student {
  name: string;  // DOIT être fourni
}

let etudiant: Student = {
  name: "Ali"  // ✅ OK
};

let etudiant2: Student = {}; // ❌ ERREUR: name est requis
```

**b) `name!: string`** - **Assertion** (je garantis qu'elle sera initialisée)
```typescript
class Student {
  name!: string;  // Je promets de l'initialiser plus tard
  
  constructor() {
    // TypeScript ne vérifie pas si name est initialisé
    // Utilisé quand on initialise dans une méthode
  }
}
```

**c) `name?: string`** - Propriété **OPTIONNELLE**
```typescript
interface Student {
  name?: string;  // Peut être absent
}

let etudiant: Student = {};  // ✅ OK, name est optionnel
let etudiant2: Student = { name: "Ali" };  // ✅ OK aussi
```

### Questions sur les Pipes

#### a) Que fait `uppercase` ?
**Transforme le texte en majuscules**
```html
{{ "hello" | uppercase }}  → HELLO
{{ etudiant.name | uppercase }}  → ALI BEN SALEH
```

#### b) Pipes intégrés dans Angular :

**Transformation de texte :**
- `uppercase` : MAJUSCULES
- `lowercase` : minuscules
- `titlecase` : Première Lettre En Majuscule

**Nombres :**
- `number:'1.2-2'` : Format décimal (1 entier, min 2 décimales, max 2)
- `percent` : 0.75 → 75%
- `currency:'EUR'` : 19.99 → 19,99 €

**Dates :**
- `date:'short'` : 18/11/2025 10:30
- `date:'longDate'` : 18 novembre 2025
- `date:'dd/MM/yyyy'` : 18/11/2025

**Arrays :**
- `slice:0:5` : Prend les 5 premiers éléments
- `json` : Affiche l'objet en JSON (debug)

**Async :**
- `async` : Souscrit automatiquement aux Observables

#### c) Créer des pipes personnalisés ?

**OUI ! Avec `ng generate pipe`**

```bash
ng generate pipe reverse
```

**Exemple - Pipe pour inverser une chaîne :**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

**Utilisation :**
```html
{{ "Angular" | reverse }}  → ralugnA
```

---

## 📋 SECTION IV : VALIDATION DES ACQUIS - QCM

### Question 1 : Structure d'un Projet Angular

**1. Quel fichier sert de point d'entrée principal ?**
✅ **b) main.ts**

**Explication :** `main.ts` bootstrap l'AppModule et démarre l'application. `index.html` est le conteneur HTML mais ne démarre pas Angular.

**2. Où se trouvent les composants ?**
✅ **c) src/app/**

**Explication :** Tout le code applicatif (composants, services, etc.) est dans `src/app/`.

**3. Rôle de angular.json ?**
✅ **b) Définir les configurations de construction et les options pour Angular CLI**

**Explication :** `angular.json` configure comment Angular CLI build, serve et test le projet.

**4. À quoi sert package.json ?**
✅ **a) Il décrit les dépendances du projet et les scripts npm disponibles**

**Explication :** `package.json` gère toutes les dépendances npm et les commandes du projet.

**5. Rôle de tsconfig.json ?**
✅ **a) Configurer les options de compilation TypeScript pour le projet**

**Explication :** `tsconfig.json` définit comment TypeScript compile le code.

---

### Question 2 : Création et Intégration de Composants

**1. Commande pour générer un composant profil ?**
✅ **c) ng generate component profil**

**Explication :** `ng generate component` (ou `ng g c`) est la commande CLI standard.

**2. Fichier NON créé automatiquement ?**
✅ **d) profil.service.ts**

**Explication :** Angular CLI génère .ts, .html, .css, .spec.ts mais PAS de service automatiquement.

**3. Décorateur pour un composant ?**
✅ **b) @Component**

**Explication :** `@Component` définit les métadonnées d'un composant Angular.

**4. Pour intégrer un composant ?**
✅ **a) La balise HTML personnalisée correspondant au sélecteur du composant**

**Explication :** On utilise `<app-profil></app-profil>` dans le template parent.

**5. Créer dans un sous-dossier ?**
✅ **a) ng generate component composants/utilisateur**

**Explication :** Angular CLI crée automatiquement les dossiers manquants.

---

### Question 3 : Liaison de Données Bidirectionnelle avec ngModel

**1. Syntaxe correcte de ngModel ?**
✅ **c) [(ngModel)]="nom"**

**Explication :** `[(ngModel)]` combine `[ngModel]` (property binding) et `(ngModelChange)` (event binding).

**2. Module à importer ?**
✅ **b) FormsModule**

**Explication :** `ngModel` est dans `@angular/forms`, pas dans le core.

**3. Différence unidirectionnelle vs bidirectionnelle ?**
✅ **b) La liaison unidirectionnelle met à jour la vue lorsque le modèle change, tandis que la bidirectionnelle synchronise automatiquement le modèle et la vue dans les deux sens**

**Explication :** 
- Unidirectionnelle : composant → vue OU vue → composant
- Bidirectionnelle : composant ↔ vue (synchronisation automatique)

**4. Package de ngModel ?**
✅ **c) @angular/forms**

**Explication :** `ngModel` fait partie du module FormsModule dans @angular/forms.

**5. Pourquoi utiliser la liaison bidirectionnelle ?**
✅ **b) Pour synchroniser automatiquement les données entre le modèle (composant) et la vue (template)**

**Explication :** Évite d'écrire manuellement le code pour mettre à jour le modèle ET la vue.

---

### Question 4 : l'AppModule

**1. Rôle principal de l'AppModule ?**
✅ **c) Il déclare les composants, directives, et pipes, et importe les modules nécessaires**

**Explication :** AppModule est le module racine qui organise toute l'application.

**2. Décorateur pour un module ?**
✅ **a) @NgModule**

**Explication :** `@NgModule` définit un module Angular avec ses métadonnées.

**3. Où ajouter FormsModule ?**
✅ **b) imports**

**Explication :** Le tableau `imports` reçoit les modules externes nécessaires.

**4. Si on oublie d'importer un module ?**
✅ **c) Les fonctionnalités liées au module manquant ne fonctionneront pas, et des erreurs pourraient survenir à l'exécution**

**Explication :** Angular génère des erreurs comme "Can't bind to 'ngModel'".

**5. Fichier de l'AppModule ?**
✅ **b) app.module.ts**

**Explication :** Par convention, le module racine est dans `app.module.ts`.

---

### Question 5 : Déclaration des Composants

**1. Pourquoi déclarer les composants ?**
✅ **a) Pour que les composants puissent être utilisés dans les templates d'autres composants du même module**

**Explication :** Sans déclaration, Angular ne reconnaît pas le sélecteur du composant.

**2. Tableau pour déclarer ?**
✅ **b) declarations**

**Explication :** Le tableau `declarations` contient composants, directives et pipes du module.

**3. Composant non déclaré ?**
✅ **b) Angular génère une erreur indiquant que le composant n'est pas une entité connue**

**Explication :** Erreur : `'app-xxx' is not a known element`.

**4. Déclarer dans plusieurs modules ?**
✅ **b) Non, un composant ne peut être déclaré que dans un seul module**

**Explication :** Si besoin de partage, utilisez un module partagé (SharedModule).

**5. Bonne pratique d'organisation ?**
✅ **b) Créer des modules fonctionnels ou de fonctionnalités pour regrouper les composants liés et déclarer les composants dans ces modules**

**Explication :** Modules feature pour organisation (UserModule, AdminModule, etc.).

---

## 📋 SECTION V : QUESTIONS OUVERTES

### Question 1 : Rôle de app.component.ts

**app.component.ts** est le **composant racine** de l'application Angular.

**Rôle :**
1. **Point d'entrée de l'interface utilisateur**
   - Premier composant chargé et affiché
   - Contient généralement le layout principal (header, footer, router-outlet)

2. **Classe TypeScript avec logique**
   ```typescript
   export class AppComponent {
     title = 'Mon Application';
     // Propriétés et méthodes globales
   }
   ```

**Intégration avec app.module.ts :**
```typescript
// app.module.ts
@NgModule({
  declarations: [AppComponent],  // Déclaré ici
  bootstrap: [AppComponent]      // Composant de démarrage
})
export class AppModule { }
```
- AppModule **déclare** AppComponent dans `declarations`
- AppModule **bootstrap** AppComponent (composant à charger au démarrage)

**Intégration avec main.ts :**
```typescript
// main.ts
platformBrowserDynamic()
  .bootstrapModule(AppModule)  // Charge AppModule
  .catch(err => console.error(err));
```
- `main.ts` charge AppModule
- AppModule charge AppComponent
- AppComponent s'affiche dans `<app-root>` de index.html

**Flux complet :**
```
index.html (<app-root>)
  ↓
main.ts (bootstrapModule)
  ↓
app.module.ts (bootstrap: [AppComponent])
  ↓
app.component.ts (chargé et affiché)
```

---

### Question 2 : Processus de Création d'un Composant

**Étapes complètes :**

#### 1. Génération avec Angular CLI
```bash
ng generate component nom-composant
# ou raccourci
ng g c nom-composant
```

**Importance :** 
- Crée automatiquement les 4 fichiers nécessaires
- Respecte les conventions de nommage Angular
- Met à jour automatiquement le module

#### 2. Fichiers générés

**a) nom-composant.component.ts**
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-nom-composant',      // Balise HTML
  templateUrl: './nom-composant.component.html',
  styleUrls: ['./nom-composant.component.css']
})
export class NomComposantComponent {
  // Propriétés et méthodes
}
```

**b) nom-composant.component.html** (template)
```html
<p>nom-composant works!</p>
```

**c) nom-composant.component.css** (styles encapsulés)

**d) nom-composant.component.spec.ts** (tests)

#### 3. Déclaration automatique dans le module
```typescript
// app.module.ts
@NgModule({
  declarations: [
    AppComponent,
    NomComposantComponent  // ← Ajouté automatiquement
  ]
})
```

**Importance :** Sans déclaration, le composant ne peut pas être utilisé.

#### 4. Ajout de logique métier
```typescript
export class NomComposantComponent {
  titre = 'Mon Titre';
  items: string[] = [];
  
  ajouterItem(item: string) {
    this.items.push(item);
  }
}
```

#### 5. Modification du template
```html
<h2>{{ titre }}</h2>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
<button (click)="ajouterItem('Nouvel item')">Ajouter</button>
```

#### 6. Ajout de styles
```css
h2 {
  color: #667eea;
  font-size: 1.5rem;
}
```

#### 7. Intégration dans un composant parent
```html
<!-- app.component.html -->
<app-nom-composant></app-nom-composant>
```

**Clés du succès :**
- ✅ Déclaration dans le module
- ✅ Sélecteur unique
- ✅ Export de la classe
- ✅ Respect des conventions de nommage

---

### Question 3 : Pourquoi FormsModule pour ngModel ?

**Raisons architecturales :**

#### 1. Angular est modulaire
```typescript
// Angular sépare les fonctionnalités en modules
@angular/core       → Fonctionnalités de base
@angular/common     → Directives communes (ngIf, ngFor)
@angular/forms      → Gestion des formulaires
@angular/router     → Navigation
@angular/http       → Requêtes HTTP
```

**Avantages :**
- Charge uniquement ce dont on a besoin
- Réduit la taille du bundle
- Organisation claire des fonctionnalités

#### 2. ngModel n'est pas dans le core
```typescript
// FormsModule doit être importé explicitement
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule]  // Active ngModel
})
```

**Sans FormsModule :**
```
ERROR: Can't bind to 'ngModel' since it isn't a known property of 'input'.
```

#### 3. Contenu de FormsModule

**Directives fournies :**
- `ngModel` : Liaison bidirectionnelle
- `ngForm` : Formulaire template-driven
- `ngModelGroup` : Groupement de champs

**Validateurs :**
- `required`, `minLength`, `maxLength`
- `pattern`, `email`
- Validation automatique des formulaires

**Suivi d'état :**
- `touched/untouched` : Champ visité ou non
- `dirty/pristine` : Valeur modifiée ou non
- `valid/invalid` : Validation réussie ou non

**Classes CSS automatiques :**
```css
.ng-valid { border: green; }
.ng-invalid { border: red; }
.ng-touched { background: #f0f0f0; }
```

#### 4. Contribution au fonctionnement des formulaires

**Exemple complet :**
```typescript
// Component
utilisateur = {
  nom: '',
  email: ''
};
```

```html
<!-- Template -->
<form #monForm="ngForm">
  <input [(ngModel)]="utilisateur.nom" 
         name="nom" 
         required 
         minlength="3">
  
  <input [(ngModel)]="utilisateur.email" 
         name="email" 
         required 
         email>
  
  <button [disabled]="monForm.invalid">Valider</button>
</form>
```

**FormsModule permet :**
1. ✅ Synchronisation automatique modèle ↔ vue
2. ✅ Validation automatique des champs
3. ✅ Suivi de l'état du formulaire
4. ✅ Messages d'erreur conditionnels
5. ✅ Désactivation du bouton si invalide

**Sans FormsModule :** Il faudrait tout coder manuellement !
```typescript
// Code manuel sans FormsModule (à éviter!)
onInputChange(event: Event) {
  const input = event.target as HTMLInputElement;
  this.utilisateur.nom = input.value;
  this.validateForm();
}
```

---

### Question 4 : Liaison de Données Bidirectionnelle

**Définition :**
La liaison bidirectionnelle synchronise automatiquement les données entre le **modèle** (composant TypeScript) et la **vue** (template HTML) dans les **deux sens**.

**Syntaxe :**
```html
[(ngModel)]="propriete"
```

**Décomposition :**
- `[ngModel]` : Property Binding (modèle → vue)
- `(ngModelChange)` : Event Binding (vue → modèle)
- `[(ngModel)]` : Combinaison des deux (↔)

#### Exemple Concret : Formulaire d'Inscription

**1. Composant TypeScript**
```typescript
export class InscriptionComponent {
  utilisateur = {
    nom: '',
    prenom: '',
    email: '',
    age: 0,
    newsletter: false
  };
  
  onSubmit() {
    console.log('Données:', this.utilisateur);
    // Envoi au serveur...
  }
}
```

**2. Template HTML**
```html
<form (ngSubmit)="onSubmit()">
  <h3>Formulaire d'Inscription</h3>
  
  <!-- Champ texte -->
  <div>
    <label>Nom :</label>
    <input [(ngModel)]="utilisateur.nom" 
           name="nom" 
           placeholder="Votre nom">
  </div>
  
  <!-- Champ texte -->
  <div>
    <label>Prénom :</label>
    <input [(ngModel)]="utilisateur.prenom" 
           name="prenom" 
           placeholder="Votre prénom">
  </div>
  
  <!-- Champ email -->
  <div>
    <label>Email :</label>
    <input type="email" 
           [(ngModel)]="utilisateur.email" 
           name="email" 
           placeholder="email@exemple.com">
  </div>
  
  <!-- Champ nombre -->
  <div>
    <label>Âge :</label>
    <input type="number" 
           [(ngModel)]="utilisateur.age" 
           name="age" 
           min="0">
  </div>
  
  <!-- Checkbox -->
  <div>
    <label>
      <input type="checkbox" 
             [(ngModel)]="utilisateur.newsletter" 
             name="newsletter">
      S'abonner à la newsletter
    </label>
  </div>
  
  <!-- Affichage en temps réel -->
  <div class="preview">
    <h4>Aperçu en temps réel :</h4>
    <p><strong>Nom :</strong> {{ utilisateur.nom }}</p>
    <p><strong>Prénom :</strong> {{ utilisateur.prenom }}</p>
    <p><strong>Email :</strong> {{ utilisateur.email }}</p>
    <p><strong>Âge :</strong> {{ utilisateur.age }} ans</p>
    <p><strong>Newsletter :</strong> {{ utilisateur.newsletter ? 'Oui' : 'Non' }}</p>
  </div>
  
  <button type="submit">S'inscrire</button>
</form>
```

**3. Flux de données**
```
Utilisateur tape "Jean" dans le champ nom
  ↓
[(ngModel)] détecte le changement
  ↓
utilisateur.nom est mis à jour à "Jean"
  ↓
{{ utilisateur.nom }} affiche "Jean" en temps réel
```

**4. Avantages**
- ✅ Pas de code manuel pour gérer les événements
- ✅ Synchronisation automatique
- ✅ Code plus propre et lisible
- ✅ Moins de bugs

**5. Alternative sans ngModel (plus verbeux)**
```typescript
// Component
nom = '';

onNomChange(event: Event) {
  const input = event.target as HTMLInputElement;
  this.nom = input.value;
}
```

```html
<!-- Template -->
<input [value]="nom" 
       (input)="onNomChange($event)">
```

**Conclusion :** `[(ngModel)]` simplifie énormément la gestion des formulaires !

---

### Question 5 : Conséquences de ne pas Déclarer un Composant

#### Erreur générée

**Sans déclaration :**
```typescript
// app.module.ts - AdresseComponent NON déclaré
@NgModule({
  declarations: [
    AppComponent,
    // AdresseComponent manquant !
  ]
})
```

**Tentative d'utilisation :**
```html
<!-- app.component.html -->
<app-adresse></app-adresse>
```

**Erreur Angular :**
```
ERROR in src/app/app.component.html:5:1
NG8001: 'app-adresse' is not a known element:
1. If 'app-adresse' is an Angular component, then verify that it is part of this module.
2. If 'app-adresse' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
```

#### Conséquences sur le comportement

**1. Erreur de compilation**
- ❌ L'application ne compile pas
- ❌ `ng serve` échoue
- ❌ Message d'erreur dans la console
- ❌ Page blanche ou erreur affichée

**2. Le composant n'est pas rendu**
```html
<!-- Au lieu de voir le contenu du composant -->
<app-adresse></app-adresse>  <!-- Reste vide ou provoque une erreur -->
```

**3. Impact en développement**
- ❌ Impossible de tester le composant
- ❌ Perte de temps à chercher l'erreur
- ❌ Confusion pour les débutants

**4. Impact en production**
- ❌ Build échoue avec `ng build`
- ❌ Application non déployable
- ❌ CI/CD pipeline bloqué

#### Pourquoi Angular est strict ?

**1. Compilation AOT (Ahead-of-Time)**
```
Angular compile les templates AVANT l'exécution
  ↓
Il doit connaître TOUS les composants disponibles
  ↓
Sans déclaration, il ne peut pas compiler le template
```

**2. Optimisation des performances**
- Tree-shaking : supprime le code inutilisé
- Bundle optimization : réduit la taille
- Angular doit savoir quels composants sont utilisés

**3. Éviter les erreurs runtime**
- Détection des erreurs à la compilation
- Meilleure expérience développeur
- Code plus fiable

#### Solution et bonnes pratiques

**1. Toujours déclarer dans un module**
```typescript
@NgModule({
  declarations: [
    AppComponent,
    AdresseComponent  // ✅ Déclaré
  ]
})
```

**2. Utiliser Angular CLI**
```bash
ng generate component adresse
```
→ Déclaration automatique, zéro erreur !

**3. Modules feature pour l'organisation**
```typescript
// user.module.ts
@NgModule({
  declarations: [
    UserProfileComponent,
    UserSettingsComponent
  ],
  exports: [UserProfileComponent]  // Exporté pour utilisation ailleurs
})
export class UserModule { }

// app.module.ts
@NgModule({
  imports: [UserModule]  // Import du module feature
})
```

**4. Règle d'or**
> **Un composant = Une déclaration dans UN SEUL module**

**Exception :** Modules partagés (SharedModule) pour les composants réutilisables.

#### Résumé

| Sans Déclaration | Avec Déclaration |
|------------------|------------------|
| ❌ Erreur de compilation | ✅ Compile correctement |
| ❌ Composant non reconnu | ✅ Composant utilisable |
| ❌ Template ne se rend pas | ✅ Affichage correct |
| ❌ Application cassée | ✅ Application fonctionnelle |

**Conclusion :** La déclaration est **OBLIGATOIRE** et **ESSENTIELLE** au fonctionnement d'Angular !

---

## 🎓 RÉCAPITULATIF FINAL

### Ce que vous avez appris dans ce TP :

✅ **Structure d'un projet Angular**
- Rôle de chaque fichier et dossier
- Configuration (angular.json, tsconfig.json, package.json)
- Point d'entrée (main.ts, index.html)

✅ **Création de composants**
- Génération avec CLI (`ng g c`)
- Structure d'un composant (4 fichiers)
- Décorateur @Component et métadonnées

✅ **AppModule et modules**
- Rôle du module racine
- Tableau declarations
- Tableau imports
- Bootstrap du composant racine

✅ **FormsModule et ngModel**
- Import nécessaire pour ngModel
- Liaison bidirectionnelle [(ngModel)]
- Synchronisation modèle ↔ vue

✅ **Interfaces TypeScript**
- Définition de types
- export et import
- Propriétés optionnelles (?)

✅ **Pipes**
- Transformation de données
- Pipes intégrés (uppercase, lowercase, percent)
- Création de pipes personnalisés

✅ **Bonnes pratiques**
- Toujours déclarer les composants
- Utiliser Angular CLI
- Organisation modulaire
- Typage fort avec TypeScript

**Vous êtes maintenant prêt à créer des applications Angular complètes ! 🚀**

---

**Auteur :** Mohamed Lassoued  
**Module :** Angular - Cycle Ingénieur  
**Date :** TP2 - Structure d'un Projet et Création de Composants
