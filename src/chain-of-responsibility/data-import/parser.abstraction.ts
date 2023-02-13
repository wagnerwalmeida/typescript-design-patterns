import { IParser } from './parser.interface'

export abstract class Parser implements IParser {
  protected parser: IParser | undefined = undefined
  setNextParser(parser: IParser): IParser {
    this.parser = parser
    return this.parser
  }
  abstract processInclusion(filename: string): Object
}
