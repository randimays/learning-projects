"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const types_1 = require("../types");
class WinsAnalysis {
    team;
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            const homeTeam = match[1];
            const awayTeam = match[2];
            const outcome = match[5];
            if (homeTeam === 'Man United' && outcome === types_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (awayTeam === 'Man United' && outcome === types_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `${this.team} Wins: ${wins}`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
//# sourceMappingURL=WinsAnalysis.js.map