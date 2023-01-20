import { LogExceptionDecorator } from './log-exception.decorator'

export class VersionExceptionDecorator extends LogExceptionDecorator {
  getExceptionData(): string {
    const exceptionData = super.getExceptionData()
    const version = process.env.npm_package_version
    return `${exceptionData}\n${version}`
  }
}
