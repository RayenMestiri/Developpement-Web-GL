export class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
export var UserRole;
(function (UserRole) {
    UserRole["User"] = "User";
    UserRole["Admin"] = "Admin";
})(UserRole || (UserRole = {}));
export class LibraryUser extends Person {
    role;
    constructor(id, name, role = UserRole.User) {
        super(id, name);
        this.role = role;
    }
    getRole() { return this.role; }
}
export class LibraryAdmin extends Person {
    constructor(id, name) { super(id, name); }
    getRole() { return UserRole.Admin; }
}
//# sourceMappingURL=person.js.map