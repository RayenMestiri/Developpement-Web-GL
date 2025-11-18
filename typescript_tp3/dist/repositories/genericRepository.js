export class GenericRepository {
    items = [];
    add(item) { this.items.push(item); }
    remove(id) { this.items = this.items.filter(i => i.id !== id); }
    getAll() { return [...this.items]; }
    getById(id) { return this.items.find(i => i.id === id); }
}
//# sourceMappingURL=genericRepository.js.map