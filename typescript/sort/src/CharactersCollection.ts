import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  private getOrThrow(index: number): string {
    const value = this.data[index];

    if (value === undefined) {
      throw new Error(`no value at index ${index}`);
    }

    return value;
  }

  compare(leftIndex: number): boolean {
    const leftChar = this.getOrThrow(leftIndex);
    const rightChar = this.getOrThrow(leftIndex + 1);

    return leftChar.toLowerCase() > rightChar.toLowerCase();
  }

  swap(leftIndex: number): void {
    const leftChar = this.getOrThrow(leftIndex);
    const rightChar = this.getOrThrow(leftIndex + 1);
    const characters = this.data.split('');

    characters[leftIndex] = rightChar;
    characters[leftIndex + 1] = leftChar;
    this.data = characters.join('');
  }
}