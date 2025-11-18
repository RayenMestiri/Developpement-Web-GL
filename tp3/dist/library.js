import { GenericRepository } from './repositories/genericRepository.js';
import { LibraryUser, LibraryAdmin, Person } from './models/person.js';
import { log } from './utils/logger.js';
export class Library {
    bookRepo = new GenericRepository();
    userRepo = new GenericRepository();
    addBook(book) {
        this.bookRepo.add(book);
        log(`Book "${book.title}" added.`);
    }
    removeBook(id) {
        this.bookRepo.remove(id);
        log(`Book id ${id} removed.`);
    }
    searchBook(title) {
        const t = title.toLowerCase();
        return this.bookRepo.getAll().filter(b => b.title.toLowerCase().includes(t));
    }
    borrowBook(bookId, userId) {
        const book = this.bookRepo.getById(bookId);
        const user = this.userRepo.getById(userId);
        if (!book) {
            return log('Book not found');
        }
        if (!user) {
            return log('User not found');
        }
        if (!book.available) {
            return log(`Book "${book.title}" not available`);
        }
        book.available = false;
        log(`${user.name} borrowed "${book.title}"`);
    }
    returnBook(bookId) {
        const book = this.bookRepo.getById(bookId);
        if (!book) {
            return log('Book not found');
        }
        book.available = true;
        log(`Book "${book.title}" returned`);
    }
    listAllBooks() {
        console.log('\n=== Books ===');
        this.bookRepo.getAll().forEach(b => console.log(`[${b.id}] ${b.title} - ${b.available ? 'Available' : 'Borrowed'}`));
    }
    addUser(user) {
        this.userRepo.add(user);
        log(`User "${user.name}" added as ${user.getRole()}`);
    }
}
export { LibraryUser, LibraryAdmin };
//# sourceMappingURL=library.js.map