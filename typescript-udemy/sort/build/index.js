"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    collection;
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        if (!this.collection || !this.collection.length) {
            throw new Error('error');
        }
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                let current = this.collection[j];
                let next = this.collection[j + 1];
                if (current === undefined || next === undefined) {
                    return;
                }
                if (current > next) {
                    this.collection[j] = next;
                    this.collection[j + 1] = current;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
//# sourceMappingURL=index.js.map