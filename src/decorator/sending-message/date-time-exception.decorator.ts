import { LogExceptionDecorator } from './log-exception.decorator'

export class DateTimeExceptionDecorator extends LogExceptionDecorator {
  getExceptionData(): string {
    const exceptionData = super.getExceptionData()
    const dateTime = new Date().toLocaleString()
    return `${exceptionData}\n${dateTime}`
  }
}
