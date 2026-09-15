"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
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
        const leftNumber = this.getOrThrow(leftIndex);
        const rightNumber = this.getOrThrow(leftIndex + 1);
        return leftNumber > rightNumber;
    }
    swap(leftIndex) {
        const leftValue = this.getOrThrow(leftIndex);
        const rightValue = this.getOrThrow(leftIndex + 1);
        this.data[leftIndex] = rightValue;
        this.data[leftIndex + 1] = leftValue;
    }
}
exports.NumbersCollection = NumbersCollection;
//# sourceMappingURL=NumbersCollection.js.map