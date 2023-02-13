export interface IParser {
  setNextParser(parser: IParser | undefined): IParser
  processInclusion(filename: string): Object
}
