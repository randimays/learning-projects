import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 42, -101]);

numbersCollection.sort();

console.log(numbersCollection.data);

const charCollection = new CharactersCollection('parAdiSe');

charCollection.sort();

console.log('char collection: ', charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();

linkedList.print();