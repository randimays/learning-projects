import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchData, MatchResult } from './types';

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map(
        (match: string): string[] => {
          return match.split(',');
      })
      .map(
        (row: string[]): MatchData => {
          if (row[0] === undefined || row[3] === undefined || row[4] === undefined) {
            console.log('row is broken');
          }

          return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
          ];
        }
      )
  }
}