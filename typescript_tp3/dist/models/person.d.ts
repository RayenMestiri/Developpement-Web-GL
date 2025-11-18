export declare abstract class Person {
    id: number;
    name: string;
    constructor(id: number, name: string);
    abstract getRole(): string;
}
export declare enum UserRole {
    User = "User",
    Admin = "Admin"
}
export declare class LibraryUser extends Person {
    private role;
    constructor(id: number, name: string, role?: UserRole);
    getRole(): string;
}
export declare class LibraryAdmin extends Person {
    constructor(id: number, name: string);
    getRole(): string;
}
//# sourceMappingURL=person.d.ts.map