export class GenericRepository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void { this.items.push(item); }
  remove(id: number): void { this.items = this.items.filter(i => i.id !== id); }
  getAll(): T[] { return [...this.items]; }
  getById(id: number): T | undefined { return this.items.find(i => i.id === id); }
}
