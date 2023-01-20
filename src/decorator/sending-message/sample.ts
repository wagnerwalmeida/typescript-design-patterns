import { DateTimeExceptionDecorator } from './date-time-exception.decorator'
import { LogExceptionDecorator } from './log-exception.component-implementation'
import { ILogException } from './log-exception.component-interface'
import { VersionExceptionDecorator } from './version-exception.decorator'

process.on('uncaughtException', function (err) {
  let logException: ILogException = new LogExceptionDecorator(err)

  logException = new DateTimeExceptionDecorator(logException)
  logException = new VersionExceptionDecorator(logException)

  console.log(logException.getExceptionData())
})

throw new Error('Vish que deu ruim')
