export class BookAPIService {
    static fetchBooks() {
        const books = [
            { id: 1, title: '1984', author: 'George Orwell', year: 1949, available: true },
            { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, available: true },
            { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, available: true }
        ];
        return { data: books };
    }
}
//# sourceMappingURL=bookApiService.js.map