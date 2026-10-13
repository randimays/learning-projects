import { Analyzer, MatchData, MatchResult } from "../types";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      const homeTeam = match[1];
      const awayTeam = match[2];
      const outcome = match[5];

      if (homeTeam === 'Man United' && outcome === MatchResult.HomeWin) {
        wins++;
      } else if (awayTeam === 'Man United' && outcome === MatchResult.AwayWin) {
        wins++;
      }
    }

    return `${this.team} Wins: ${wins}`;
  }
}