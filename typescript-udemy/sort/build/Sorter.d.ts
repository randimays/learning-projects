interface Sortable {
    compare(leftIndex: number): boolean;
    length: number;
    swap(leftIndex: number): void;
}
export declare class Sorter {
    collection: Sortable;
    constructor(collection: Sortable);
    sort(): void;
}
export {};
//# sourceMappingURL=Sorter.d.ts.map