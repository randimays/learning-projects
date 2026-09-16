import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./types";

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data);

let manUnitedWins = 0;

for (let match of reader.data) {
  const homeTeam = match[1];
  const awayTeam = match[2];
  const outcome = match[5];

  if (homeTeam === 'Man United' && outcome === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (awayTeam === 'Man United' && outcome === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

const dateOfFirstMatch = reader.data[0][0];

console.log('Manchester United Wins: ', manUnitedWins)