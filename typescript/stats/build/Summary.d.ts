import { Analyzer, MatchData, OutputTarget } from './types';
export declare class Summary {
    analyzer: Analyzer;
    outputTarget: OutputTarget;
    static winsAnalysisWithHtmlReport(team: string, fileName: string): Summary;
    constructor(analyzer: Analyzer, outputTarget: OutputTarget);
    buildAndPrintReport(matches: MatchData[]): void;
}
//# sourceMappingURL=Summary.d.ts.map