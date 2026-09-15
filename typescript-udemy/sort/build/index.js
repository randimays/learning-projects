"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0, 42, -101]);
// const numbersSorter = new Sorter(numbersCollection);
// numbersSorter.sort();
// console.log(numbersCollection.data);
const charCollection = new CharactersCollection_1.CharactersCollection('parAdiSe');
const charSorter = new Sorter_1.Sorter(charCollection);
charSorter.sort();
console.log(charCollection.data);
//# sourceMappingURL=index.js.map