import { Analyzer, MatchData } from "../types";
export declare class WinsAnalysis implements Analyzer {
    team: string;
    constructor(team: string);
    run(matches: MatchData[]): string;
}
//# sourceMappingURL=WinsAnalysis.d.ts.map