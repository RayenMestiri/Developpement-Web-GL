export declare class GenericRepository<T extends {
    id: number;
}> {
    private items;
    add(item: T): void;
    remove(id: number): void;
    getAll(): T[];
    getById(id: number): T | undefined;
}
//# sourceMappingURL=genericRepository.d.ts.map