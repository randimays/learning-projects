import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./types";

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  const homeTeam = match[1];
  const awayTeam = match[2];
  const outcome = match[5];

  if (homeTeam === 'Man United' && outcome === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (awayTeam === 'Man United' && outcome === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log('Manchester United Wins: ', manUnitedWins)