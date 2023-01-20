import { BaseDecorator } from './base.decorator'

export class VersionDecorator extends BaseDecorator {
  getExceptionData(): string {
    const exceptionData = super.getExceptionData()
    const version = process.env.npm_package_version
    return `${exceptionData}\n${version}`
  }
}
