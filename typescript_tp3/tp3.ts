// ============================================
// EXERCICE 1 : Introduction
// ============================================
console.log("Hello TypeScript!");

// ============================================
// EXERCICE 2 : Types de base
// ============================================
let userName: string = "rayen mestiri";
let age: number = 20;
let isAdmin: boolean = false;

let scores: number[] = [85, 90, 78, 92, 88];

let student: [string, number] = ["Alice", 21];

enum Role {
    User,
    Admin,
    SuperAdmin
}
let userRole: Role = Role.Admin;

// ============================================
// EXERCICE 3 : Types avancés
// ============================================
let id: number | string = "123";

type A = { propA: string };
type B = { propB: number };
type Intersection = A & B;
let example: Intersection = { propA: "Hello", propB: 42 };

type Status = "pending" | "done" | "canceled";
let userStatus: Status = "pending";

let unknownValue: unknown = "Hello TypeScript";
if (typeof unknownValue === "string") {
    console.log((unknownValue as string).length);
}

// ============================================
// EXERCICE 4 : Objets & Interfaces
// ============================================
interface User {
    id: number;
    name: string;
    email?: string;
    readonly isAdmin: boolean;
}

let user1: User = {
    id: 1,
    name: "Rayen",
    email: "rayen@example.com",
    isAdmin: false
};

interface Admin extends User {
    permissions: string[];
}

let admin1: Admin = {
    id: 2,
    name: "Admin User",
    isAdmin: true,
    permissions: ["read", "write", "delete"]
};

// ============================================
// EXERCICE 5 : Fonctions
// ============================================
function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Hello ${name}, you are ${age} years old.`);
    } else {
        console.log(`Hello ${name}!`);
    }
}

function power(base: number, exp: number = 2): number {
    return Math.pow(base, exp);
}

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}

// ============================================
// EXERCICE 6 : Programmation Orientée Objet
// ============================================
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    school: string;

    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    }

    greet(): void {
        console.log(`Hello, I'm ${this.name}, ${this.age} years old, studying at ${this.school}.`);
    }
}

abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

interface Drivable {
    drive(): void;
}

class Car implements Drivable {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    drive(): void {
        console.log(`Driving a ${this.brand} car.`);
    }
}

// ============================================
// EXERCICE 7 : Génériques
// ============================================
function identity<T>(value: T): T {
    return value;
}



class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    getAll(): T[] {
        return this.items;
    }
}

interface ApiResponse<T> {
    data: T;
    error?: string;
}

// ============================================
// EXERCICE 10 : TP final – Gestion de bibliothèque
// ============================================

// Models
interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    available: boolean;
}

enum UserRole {
    User = "User",
    Admin = "Admin"
}

abstract class PersonBase {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    abstract getRole(): string;
}

class LibraryUser extends PersonBase {
    role: UserRole;

    constructor(id: number, name: string, role: UserRole = UserRole.User) {
        super(id, name);
        this.role = role;
    }

    getRole(): string {
        return this.role;
    }
}

class LibraryAdmin extends PersonBase {
    role: UserRole;

    constructor(id: number, name: string) {
        super(id, name);
        this.role = UserRole.Admin;
    }

    getRole(): string {
        return this.role;
    }
}

// Repository générique
class GenericRepository<T extends { id: number }> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }

    getAll(): T[] {
        return this.items;
    }

    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
}

// Library class
class Library {
    private bookRepo = new GenericRepository<Book>();
    private userRepo = new GenericRepository<LibraryUser | LibraryAdmin>();

    addBook(book: Book): void {
        this.bookRepo.add(book);
        console.log(`Book "${book.title}" added to library.`);
    }

    removeBook(id: number): void {
        this.bookRepo.remove(id);
        console.log(`Book with id ${id} removed from library.`);
    }

    searchBook(title: string): Book[] {
        return this.bookRepo.getAll().filter(book =>
            book.title.toLowerCase().includes(title.toLowerCase())
        );
    }

    borrowBook(bookId: number, userId: number): void {
        const book = this.bookRepo.getById(bookId);
        const user = this.userRepo.getById(userId);

        if (!book) {
            console.log("Book not found.");
            return;
        }

        if (!user) {
            console.log("User not found.");
            return;
        }

        if (!book.available) {
            console.log(`Book "${book.title}" is not available.`);
            return;
        }

        book.available = false;
        console.log(`${user.name} borrowed "${book.title}".`);
    }

    returnBook(bookId: number): void {
        const book = this.bookRepo.getById(bookId);

        if (!book) {
            console.log("Book not found.");
            return;
        }

        book.available = true;
        console.log(`Book "${book.title}" returned.`);
    }

    listAllBooks(): void {
        console.log("\n=== Library Books ===");
        this.bookRepo.getAll().forEach(book => {
            console.log(`[${book.id}] ${book.title} by ${book.author} (${book.year}) - ${book.available ? 'Available' : 'Borrowed'}`);
        });
    }

    addUser(user: LibraryUser | LibraryAdmin): void {
        this.userRepo.add(user);
        console.log(`User "${user.name}" added.`);
    }
}

// Service API fictif
class BookAPIService {
    static fetchBooks(): ApiResponse<Book[]> {
        const books: Book[] = [
            { id: 1, title: "1984", author: "George Orwell", year: 1949, available: true },
            { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, available: true },
            { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, available: true }
        ];

        return { data: books };
    }
}

// ============================================
// TESTS
// ============================================
console.log("\n=== Tests Exercice 2 ===");
console.log(`Name: ${userName}, Age: ${age}, Admin: ${isAdmin}`);
console.log(`Scores:`, scores);
console.log(`Student:`, student);
console.log(`Role:`, Role[userRole]);

console.log("\n=== Tests Exercice 5 ===");
console.log(`add(5, 3) = ${add(5, 3)}`);
greet("Alice");
greet("Bob", 25);
console.log(`power(2) = ${power(2)}`);
console.log(`power(2, 3) = ${power(2, 3)}`);
console.log(`combine(5, 10) = ${combine(5, 10)}`);
console.log(`combine("Hello ", "World") = ${combine("Hello ", "World")}`);

console.log("\n=== Tests Exercice 6 ===");
const person = new Person("John", 30);
person.greet();

const student1 = new Student("Emma", 20, "MIT");
student1.greet();

const circle = new Circle(5);
console.log(`Circle area: ${circle.area()}`);

const rect = new Rectangle(4, 6);
console.log(`Rectangle area: ${rect.area()}`);

const car = new Car("Toyota");
car.drive();

console.log("\n=== Tests Exercice 7 ===");
console.log(`identity(42) = ${identity(42)}`);
console.log(`identity("Hello") = ${identity("Hello")}`);

const numRepo = new Repository<number>();
numRepo.add(10);
numRepo.add(20);
numRepo.add(30);
console.log(`Repository items:`, numRepo.getAll());
numRepo.remove(20);
console.log(`After removing 20:`, numRepo.getAll());

console.log("\n=== Tests Exercice 10 : Library Management ===");
const library = new Library();

const apiResponse = BookAPIService.fetchBooks();
if (!apiResponse.error) {
    apiResponse.data.forEach(book => library.addBook(book));
}

const user = new LibraryUser(1, "Alice");
const admin = new LibraryAdmin(2, "Bob");
library.addUser(user);
library.addUser(admin);

library.listAllBooks();

library.borrowBook(1, 1);
library.listAllBooks();

library.returnBook(1);
library.listAllBooks();

const searchResults = library.searchBook("gatsby");
console.log("\nSearch results for 'gatsby':", searchResults);