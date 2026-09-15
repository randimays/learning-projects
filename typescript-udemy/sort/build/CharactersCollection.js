"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    data;
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    getOrThrow(index) {
        const value = this.data[index];
        if (value === undefined) {
            throw new Error(`no value at index ${index}`);
        }
        return value;
    }
    compare(leftIndex) {
        const leftChar = this.getOrThrow(leftIndex);
        const rightChar = this.getOrThrow(leftIndex + 1);
        return leftChar.toLowerCase() > rightChar.toLowerCase();
    }
    swap(leftIndex) {
        const leftChar = this.getOrThrow(leftIndex);
        const rightChar = this.getOrThrow(leftIndex + 1);
        const characters = this.data.split('');
        characters[leftIndex] = rightChar;
        characters[leftIndex + 1] = leftChar;
        this.data = characters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
//# sourceMappingURL=CharactersCollection.js.map