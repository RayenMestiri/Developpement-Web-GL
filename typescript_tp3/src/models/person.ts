export abstract class Person {
  constructor(public id: number, public name: string) {}
  abstract getRole(): string;
}

export enum UserRole {
  User = 'User',
  Admin = 'Admin'
}

export class LibraryUser extends Person {
  constructor(id: number, name: string, private role: UserRole = UserRole.User) {
    super(id, name);
  }
  getRole(): string { return this.role; }
}

export class LibraryAdmin extends Person {
  constructor(id: number, name: string) { super(id, name); }
  getRole(): string { return UserRole.Admin; }
}
