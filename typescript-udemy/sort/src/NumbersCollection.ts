export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  private getOrThrow(index: number): number {
    const value = this.data[index];

    if (value === undefined) {
      throw new Error(`no value at index ${index}`);
    }

    return value;
  }

  compare(leftIndex: number): boolean {
    const leftNumber = this.getOrThrow(leftIndex);
    const rightNumber = this.getOrThrow(leftIndex + 1);

    return leftNumber > rightNumber;
  }

  swap(leftIndex: number): void {
    const leftValue = this.getOrThrow(leftIndex);
    const rightValue = this.getOrThrow(leftIndex + 1);

    this.data[leftIndex] = rightValue;
    this.data[leftIndex + 1] = leftValue;
  }
}