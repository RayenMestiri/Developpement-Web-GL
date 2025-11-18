import type { Book } from '../models/book.js';
export interface ApiResponse<T> {
    data: T;
    error?: string;
}
export declare class BookAPIService {
    static fetchBooks(): ApiResponse<Book[]>;
}
//# sourceMappingURL=bookApiService.d.ts.map