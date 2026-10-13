import { Analyzer, MatchData, OutputTarget } from './types';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export class Summary {
  static winsAnalysisWithHtmlReport(team: string, fileName: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport(fileName)
    );
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);

    this.outputTarget.print(output);
  }
}