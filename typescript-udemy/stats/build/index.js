"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const types_1 = require("./types");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
console.log(reader.data);
let manUnitedWins = 0;
for (let match of reader.data) {
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
const dateOfFirstMatch = reader.data[0][0];
console.log('Manchester United Wins: ', manUnitedWins);
//# sourceMappingURL=index.js.map