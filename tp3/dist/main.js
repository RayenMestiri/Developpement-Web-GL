import { Library, LibraryUser, LibraryAdmin } from './library.js';
import { BookAPIService } from './services/bookApiService.js';
const library = new Library();
// Seed books from API
const response = BookAPIService.fetchBooks();
response.data.forEach(b => library.addBook(b));
// Add users
const user = new LibraryUser(1, 'Alice');
const admin = new LibraryAdmin(2, 'Bob');
library.addUser(user);
library.addUser(admin);
library.listAllBooks();
library.borrowBook(1, 1);
library.listAllBooks();
library.returnBook(1);
library.listAllBooks();
console.log('\nSearch for "1984":', library.searchBook('1984'));
//# sourceMappingURL=main.js.map