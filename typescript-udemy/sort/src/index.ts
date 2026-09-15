import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, 42, -101]);
// const numbersSorter = new Sorter(numbersCollection);

// numbersSorter.sort();

// console.log(numbersCollection.data);

const charCollection = new CharactersCollection('parAdiSe');
const charSorter = new Sorter(charCollection);

charSorter.sort();

console.log(charCollection.data);