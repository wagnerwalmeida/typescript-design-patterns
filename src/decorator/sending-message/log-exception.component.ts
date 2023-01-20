import { ILogException } from './log-exception.interface'

export class LogException implements ILogException {
  constructor(private readonly exception: Error) {}
  getExceptionData(): string {
    return this.exception.message
  }
}
