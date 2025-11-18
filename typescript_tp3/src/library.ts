import { GenericRepository } from './repositories/genericRepository.js';
import type { Book } from './models/book.js';
import { LibraryUser, LibraryAdmin, Person } from './models/person.js';
import { log } from './utils/logger.js';

export class Library {
  private bookRepo = new GenericRepository<Book>();
  private userRepo = new GenericRepository<Person>();

  addBook(book: Book): void {
    this.bookRepo.add(book);
    log(`Book "${book.title}" added.`);
  }
  removeBook(id: number): void {
    this.bookRepo.remove(id);
    log(`Book id ${id} removed.`);
  }
  searchBook(title: string): Book[] {
    const t = title.toLowerCase();
    return this.bookRepo.getAll().filter(b => b.title.toLowerCase().includes(t));
  }
  borrowBook(bookId: number, userId: number): void {
    const book = this.bookRepo.getById(bookId);
    const user = this.userRepo.getById(userId);
    if (!book) { return log('Book not found'); }
    if (!user) { return log('User not found'); }
    if (!book.available) { return log(`Book "${book.title}" not available`); }
    book.available = false;
    log(`${user.name} borrowed "${book.title}"`);
  }
  returnBook(bookId: number): void {
    const book = this.bookRepo.getById(bookId);
    if (!book) { return log('Book not found'); }
    book.available = true;
    log(`Book "${book.title}" returned`);
  }
  listAllBooks(): void {
    console.log('\n=== Books ===');
    this.bookRepo.getAll().forEach(b => console.log(`[${b.id}] ${b.title} - ${b.available ? 'Available' : 'Borrowed'}`));
  }
  addUser(user: Person): void {
    this.userRepo.add(user);
    log(`User "${user.name}" added as ${user.getRole()}`);
  }
}

export { LibraryUser, LibraryAdmin };
