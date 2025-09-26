// TP1 - Types et Interfaces TypeScript
// Exemples et exercices sur les types et interfaces

// ============================================
// Exercice 1: Types Primitifs
// ============================================

// TODO: Déclarez des variables avec les types appropriés
let userName: any = "Alice";
let userAge: any = 25;
let isActive: any = true;
let score: any = null;
let data: any = undefined;

// TODO: Créez une fonction qui retourne void
function logMessage(message: any): any {
    console.log(message);
}

// ============================================
// Exercice 2: Types Union et Intersection
// ============================================

// TODO: Définissez un type union pour Status
type Status = any;

// TODO: Créez une fonction qui accepte string ou number
function formatId(id: any): string {
    return `ID: ${id}`;
}

// TODO: Implémentez un type guard
function isString(value: any): boolean {
    return typeof value === 'string';
}

// ============================================
// Exercice 3: Interfaces
// ============================================

// TODO: Définissez une interface User
interface User {
    // Propriétés à définir
}

// TODO: Interface avec propriétés optionnelles
interface UserProfile {
    // Propriétés à définir
}

// TODO: Interface avec propriétés readonly
interface Product {
    // Propriétés à définir
}

// ============================================
// Exercice 4: Types Avancés
// ============================================

// TODO: Créez une interface avec index signature
interface Dictionary {
    // Index signature à définir
}

// TODO: Étendez l'interface User
interface AdminUser extends User {
    // Propriétés supplémentaires
}

// TODO: Type alias vs Interface
type Point = {
    // Propriétés à définir
};

// ============================================
// Exemples d'utilisation
// ============================================

// TODO: Implémentez ces fonctions avec typage correct

function createUser(name: any, age: any, email?: any): any {
    return {
        name,
        age,
        email: email || null,
        id: Math.random().toString(36).substr(2, 9)
    };
}

function updateUserStatus(user: any, status: any): any {
    return {
        ...user,
        status,
        lastUpdated: new Date()
    };
}

function getUserInfo(user: any): string {
    const emailInfo = user.email ? ` (${user.email})` : '';
    return `${user.name}, ${user.age} ans${emailInfo}`;
}

// ============================================
// Tests et démonstrations
// ============================================

// Exemples d'utilisation pour tester votre code
const user1 = createUser("Alice", 25, "alice@example.com");
const user2 = createUser("Bob", 30);

console.log("=== Tests Types et Interfaces ===");
console.log("User 1:", getUserInfo(user1));
console.log("User 2:", getUserInfo(user2));

console.log("Format ID (string):", formatId("USER123"));
console.log("Format ID (number):", formatId(456));

const updatedUser = updateUserStatus(user1, "active");
console.log("Updated user:", updatedUser);

// Test des type guards
console.log("Is 'hello' a string?", isString("hello"));
console.log("Is 123 a string?", isString(123));

// Export pour les tests
export {
    createUser,
    updateUserStatus,
    getUserInfo,
    formatId,
    isString,
    User,
    UserProfile,
    Product,
    Dictionary,
    AdminUser,
    Point,
    Status
};