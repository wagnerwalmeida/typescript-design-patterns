import { BaseDecorator } from './base.decorator'

export class DateTimeDecorator extends BaseDecorator {
  getExceptionData(): string {
    const exceptionData = super.getExceptionData()
    const dateTime = new Date().toLocaleString()
    return `${exceptionData}\n${dateTime}`
  }
}
