import type { Book } from './models/book.js';
import { LibraryUser, LibraryAdmin, Person } from './models/person.js';
export declare class Library {
    private bookRepo;
    private userRepo;
    addBook(book: Book): void;
    removeBook(id: number): void;
    searchBook(title: string): Book[];
    borrowBook(bookId: number, userId: number): void;
    returnBook(bookId: number): void;
    listAllBooks(): void;
    addUser(user: Person): void;
}
export { LibraryUser, LibraryAdmin };
//# sourceMappingURL=library.d.ts.map