# Module 04 - Next.js

Ce module couvre Next.js, le framework React pour le développement d'applications web fullstack avec SSR/SSG.

## 🎯 Objectifs du Module

- Comprendre les avantages de Next.js par rapport à React
- Maîtriser le Server-Side Rendering (SSR) et Static Site Generation (SSG)
- Implémenter des API Routes pour créer des APIs REST
- Gérer l'authentification et l'autorisation
- Déployer et optimiser les applications Next.js

## 📚 TPs Inclus

### TP1 - Setup et Routing
**Durée :** 3h  
**Objectifs :**
- Installation et configuration Next.js
- File-based routing système
- Pages et composants
- Link et navigation
- Dynamic routing ([id].js)
- Nested routing et catch-all routes
- Custom App et Document

### TP2 - SSR et SSG
**Durée :** 4h  
**Objectifs :**
- getStaticProps pour SSG
- getStaticPaths pour dynamic SSG
- getServerSideProps pour SSR
- Incremental Static Regeneration (ISR)
- Image optimization avec next/image
- Performance et SEO

### TP3 - API Routes
**Durée :** 4h  
**Objectifs :**
- Création d'API REST avec API Routes
- Méthodes HTTP (GET, POST, PUT, DELETE)
- Middleware et validation
- Connexion à une base de données
- CORS et sécurité
- API testing

### TP4 - Authentication
**Durée :** 4h  
**Objectifs :**
- NextAuth.js setup
- Providers (Google, GitHub, credentials)
- JWT et sessions
- Protecting routes et API
- User management
- Custom login pages

### TP5 - Deployment
**Durée :** 3h  
**Objectifs :**
- Build et export
- Déploiement sur Vercel
- Environment variables
- Performance optimization
- Analytics et monitoring
- CI/CD avec GitHub Actions

## 🛠️ Outils Utilisés

- **Next.js** - Framework React
- **React** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **NextAuth.js** - Authentification
- **Prisma** - ORM pour base de données
- **Vercel** - Plateforme de déploiement

## 🚀 Installation

```bash
# Créer une nouvelle app Next.js
npx create-next-app@latest my-app --typescript --tailwind --eslint

# Ou dans le module existant
cd 04-NextJS
npm install
```

## 📝 Scripts Disponibles

```bash
# Développement
npm run dev                # Serveur de développement
npm run build              # Build production
npm run start              # Serveur production
npm run lint               # Linter le code

# Base de données (si Prisma)
npx prisma generate        # Générer le client Prisma
npx prisma db push         # Pousser le schéma
npx prisma studio          # Interface admin DB

# Tests
npm test                   # Tests unitaires
npm run test:e2e           # Tests end-to-end
npm run test:coverage      # Coverage des tests
```

## 🏗️ Structure de Projet

```
04-NextJS/
├── pages/                 # Routes file-based
│   ├── api/              # API Routes
│   ├── _app.js           # Custom App
│   ├── _document.js      # Custom Document
│   └── index.js          # Page d'accueil
├── components/           # Composants réutilisables
├── lib/                 # Utilitaires et config
├── styles/              # Styles CSS/SCSS
├── public/              # Assets statiques
├── prisma/              # Schéma base de données
├── __tests__/           # Tests
├── next.config.js       # Configuration Next.js
└── tailwind.config.js   # Configuration Tailwind
```

## 🚀 Concepts Clés

### Rendering Methods
- **SSG** - Génération statique au build
- **SSR** - Rendu côté serveur à chaque requête
- **ISR** - Régénération statique incrémentale
- **CSR** - Rendu côté client (SPA classique)

### Data Fetching
- `getStaticProps()` - Données au build time
- `getStaticPaths()` - Génération de pages dynamiques
- `getServerSideProps()` - Données à chaque requête
- `useSWR()` - Data fetching côté client

### API Routes
- Endpoints REST intégrés
- Middleware support
- Database connection
- Authentication integration

### Performance
- Automatic code splitting
- Image optimization
- Font optimization
- Bundle analysis

## 🔐 Authentification avec NextAuth.js

```javascript
// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  // Configuration additionnelle
})
```

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn)
- [React Documentation](https://react.dev/)
- [NextAuth.js](https://next-auth.js.org/)
- [Vercel Guides](https://vercel.com/guides)

## ✅ Évaluation

Critères d'évaluation :
- **Architecture fullstack** (30%) - Structure et organisation
- **Rendu et performance** (25%) - SSR/SSG/ISR appropriés
- **API et données** (25%) - API Routes et data fetching
- **Déploiement** (20%) - Production ready et optimisé