# Standards de Code - Développement Web GL

## 🎯 Objectifs

Ce document définit les standards de code à respecter dans tous les modules du projet pour assurer :
- **Lisibilité** : Code facile à comprendre
- **Maintenabilité** : Code facile à modifier
- **Consistance** : Style uniforme dans tout le projet
- **Qualité** : Réduction des bugs et amélioration des performances

## 📝 Conventions de Nommage

### Variables et Fonctions
```javascript
// ✅ Bon - camelCase
const userName = 'Alice';
const userAge = 25;
function getUserInfo() { }
function calculateTotalPrice() { }

// ❌ Mauvais
const user_name = 'Alice';  // snake_case
const UserAge = 25;         // PascalCase
function get_user_info() { } // snake_case
```

### Constantes
```javascript
// ✅ Bon - UPPER_SNAKE_CASE
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';
const DEFAULT_TIMEOUT = 5000;

// ❌ Mauvais
const maxRetryCount = 3;
const apiBaseUrl = 'https://api.example.com';
```

### Classes et Interfaces (TypeScript)
```typescript
// ✅ Bon - PascalCase
class UserService { }
class HttpClient { }
interface User { }
interface ApiResponse { }
type UserRole = 'admin' | 'user';

// ❌ Mauvais
class userService { }
class httpClient { }
interface user { }
```

### Fichiers et Dossiers
```
✅ Bon
components/
  UserProfile.tsx
  UserList.tsx
services/
  user.service.ts
  api.service.ts
utils/
  string-helpers.js
  date-utils.js

❌ Mauvais
Components/
  userprofile.tsx
  user_list.tsx
Services/
  UserService.ts
  API_Service.ts
```

## 🔧 Formatage du Code

### Indentation
- **2 espaces** pour l'indentation (pas de tabs)
- Indentation cohérente dans tous les blocs

```javascript
// ✅ Bon
function example() {
  if (condition) {
    doSomething();
  }
}

// ❌ Mauvais
function example() {
    if (condition) {
doSomething();
    }
}
```

### Guillemets
- **Single quotes** pour les chaînes de caractères
- **Template literals** pour l'interpolation

```javascript
// ✅ Bon
const message = 'Hello world';
const greeting = `Hello ${name}`;

// ❌ Mauvais
const message = "Hello world";
const greeting = 'Hello ' + name;
```

### Points-virgules
- **Toujours** terminer les instructions par un point-virgule

```javascript
// ✅ Bon
const user = { name: 'Alice' };
const result = calculateTotal();

// ❌ Mauvais
const user = { name: 'Alice' }
const result = calculateTotal()
```

### Longueur des Lignes
- **Maximum 80 caractères** par ligne
- Diviser les longues lignes de manière logique

```javascript
// ✅ Bon
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3
};

// ❌ Mauvais
const config = { apiUrl: 'https://api.example.com', timeout: 5000, retries: 3 };
```

## 📚 JavaScript/TypeScript

### Déclaration de Variables
```javascript
// ✅ Bon - Utiliser const par défaut
const userName = 'Alice';
const users = ['Alice', 'Bob'];

// ✅ Bon - let pour les variables qui changent
let counter = 0;
let currentUser = null;

// ❌ Mauvais - Éviter var
var userName = 'Alice';
```

### Fonctions
```javascript
// ✅ Bon - Arrow functions pour les fonctions courtes
const add = (a, b) => a + b;
const users = data.map(item => item.user);

// ✅ Bon - Function declarations pour les fonctions complexes
function processUserData(userData) {
  // Logique complexe
  return processedData;
}

// ✅ Bon - Fonctions pures quand possible
function calculateTax(amount, rate) {
  return amount * rate;
}
```

### Destructuring
```javascript
// ✅ Bon - Utiliser le destructuring
const { name, age } = user;
const [first, second] = items;

// ❌ Mauvais
const name = user.name;
const age = user.age;
const first = items[0];
```

### Gestion d'Erreurs
```javascript
// ✅ Bon - Try-catch pour les opérations risquées
try {
  const data = JSON.parse(jsonString);
  return processData(data);
} catch (error) {
  console.error('Failed to parse JSON:', error);
  throw new Error('Invalid JSON data');
}

// ✅ Bon - Validation des paramètres
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}
```

## 🏗️ TypeScript Spécifique

### Types
```typescript
// ✅ Bon - Types explicites quand nécessaire
function createUser(name: string, age: number): User {
  return { name, age, id: generateId() };
}

// ✅ Bon - Interfaces pour les objets complexes
interface User {
  id: string;
  name: string;
  age: number;
  email?: string; // Propriété optionnelle
}

// ❌ Mauvais - Éviter any
function processData(data: any): any {
  return data;
}
```

### Génériques
```typescript
// ✅ Bon - Génériques pour la réutilisabilité
function createRepository<T>(items: T[]): Repository<T> {
  return new Repository(items);
}

// ✅ Bon - Contraintes sur les génériques
function sortBy<T extends { name: string }>(items: T[]): T[] {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}
```

## 🔄 Angular Spécifique

### Composants
```typescript
// ✅ Bon - Structure de composant
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() user: User;
  @Output() userUpdated = new EventEmitter<User>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Initialisation
  }
}
```

### Services
```typescript
// ✅ Bon - Service injectable
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
}
```

## ⚛️ React/Next.js Spécifique

### Composants Fonctionnels
```typescript
// ✅ Bon - Composant fonctionnel avec TypeScript
interface UserProfileProps {
  user: User;
  onUpdate: (user: User) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onUpdate }) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="user-profile">
      {/* JSX */}
    </div>
  );
};
```

### Hooks
```typescript
// ✅ Bon - Custom hooks
function useUserData(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then(setUser).finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
}
```

## 📝 Commentaires et Documentation

### Commentaires JSDoc
```javascript
/**
 * Calcule le prix total avec taxes
 * @param {number} price - Prix de base
 * @param {number} taxRate - Taux de taxe (0.1 pour 10%)
 * @returns {number} Prix total avec taxes
 */
function calculateTotalPrice(price, taxRate) {
  return price * (1 + taxRate);
}
```

### Commentaires Inline
```javascript
// ✅ Bon - Expliquer le "pourquoi", pas le "quoi"
// Utiliser setTimeout pour éviter le blocage de l'UI
setTimeout(() => processLargeDataset(), 0);

// ❌ Mauvais - Éviter les commentaires évidents
const users = []; // Créer un tableau d'utilisateurs
```

## 🧪 Tests

### Nommage des Tests
```javascript
// ✅ Bon - Descriptions claires
describe('UserService', () => {
  describe('getUsers', () => {
    it('should return all users when called without parameters', () => {
      // Test
    });

    it('should filter users by role when role parameter is provided', () => {
      // Test
    });
  });
});
```

### Structure des Tests
```javascript
// ✅ Bon - Arrange, Act, Assert
it('should calculate total price with tax', () => {
  // Arrange
  const price = 100;
  const taxRate = 0.1;

  // Act
  const result = calculateTotalPrice(price, taxRate);

  // Assert
  expect(result).toBe(110);
});
```

## 🚨 À Éviter

### Anti-patterns
```javascript
// ❌ Variables globales
var globalCounter = 0;

// ❌ Fonctions trop longues (>20 lignes)
function doEverything() {
  // 50 lignes de code...
}

// ❌ Noms de variables peu clairs
const d = new Date();
const u = users.filter(x => x.a);

// ❌ Conditions complexes sans extraction
if (user.role === 'admin' && user.permissions.includes('write') && user.isActive && !user.isBlocked) {
  // Code...
}
```

### Meilleures Pratiques
```javascript
// ✅ Extraire les conditions complexes
const canUserWrite = user.role === 'admin' 
  && user.permissions.includes('write') 
  && user.isActive 
  && !user.isBlocked;

if (canUserWrite) {
  // Code...
}

// ✅ Fonctions courtes et spécialisées
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatDate(date) {
  return date.toLocaleDateString('fr-FR');
}
```

## 🔍 Outils de Qualité

### ESLint
Configuration automatique pour détecter :
- Variables non utilisées
- Code mort
- Problèmes de syntaxe
- Violations des conventions

### Prettier
Formatage automatique pour :
- Indentation cohérente
- Guillemets uniformes
- Points-virgules
- Longueur des lignes

### TypeScript
Vérification des types pour :
- Erreurs de type
- Propriétés manquantes
- Paramètres incorrects
- Null/undefined safety

## ✅ Checklist Qualité

Avant chaque commit, vérifiez :

- [ ] Code formaté avec Prettier
- [ ] Pas d'erreurs ESLint
- [ ] Types TypeScript corrects
- [ ] Tests passants
- [ ] Commentaires JSDoc pour les fonctions publiques
- [ ] Noms de variables explicites
- [ ] Fonctions courtes (<20 lignes)
- [ ] Gestion d'erreurs appropriée
- [ ] Pas de code dupliqué