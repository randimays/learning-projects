import { Sorter } from "./Sorter";
export declare class NumbersCollection extends Sorter {
    data: number[];
    constructor(data: number[]);
    get length(): number;
    private getOrThrow;
    compare(leftIndex: number): boolean;
    swap(leftIndex: number): void;
}
//# sourceMappingURL=NumbersCollection.d.ts.map