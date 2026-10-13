import { Sorter } from "./Sorter";
export declare class CharactersCollection extends Sorter {
    data: string;
    constructor(data: string);
    get length(): number;
    private getOrThrow;
    compare(leftIndex: number): boolean;
    swap(leftIndex: number): void;
}
//# sourceMappingURL=CharactersCollection.d.ts.map