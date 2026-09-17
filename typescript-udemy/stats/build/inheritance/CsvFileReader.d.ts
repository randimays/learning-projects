export declare abstract class CsvFileReader<T> {
    filename: string;
    data: T[];
    constructor(filename: string);
    abstract mapRow(row: string[]): T;
    read(): void;
}
//# sourceMappingURL=CsvFileReader.d.ts.map