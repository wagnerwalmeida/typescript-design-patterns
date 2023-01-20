import { ILogException } from './log-exception.component-interface'

export class LogExceptionDecorator implements ILogException {
  constructor(private readonly logException: ILogException) {}
  getExceptionData(): string {
    return this.logException.getExceptionData()
  }
}
