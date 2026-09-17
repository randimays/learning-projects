"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const types_1 = require("./types");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    const homeTeam = match[1];
    const awayTeam = match[2];
    const outcome = match[5];
    if (homeTeam === 'Man United' && outcome === types_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (awayTeam === 'Man United' && outcome === types_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log('Manchester United Wins: ', manUnitedWins);
//# sourceMappingURL=index.js.map