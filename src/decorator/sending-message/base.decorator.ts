import { ILogException } from './log-exception.interface'

export class BaseDecorator implements ILogException {
  constructor(private readonly logException: ILogException) {}
  getExceptionData(): string {
    return this.logException.getExceptionData()
  }
}
