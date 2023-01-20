import { ILogException } from './log-exception.component-interface'

export class LogExceptionDecorator implements ILogException {
  constructor(private readonly exception: Error) {}
  getExceptionData(): string {
    return this.exception.message
  }
}
