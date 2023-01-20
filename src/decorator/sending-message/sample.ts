import { DateTimeDecorator } from './date-time.decorator'
import { LogException } from './log-exception.component'
import { ILogException } from './log-exception.interface'
import { VersionDecorator } from './version.decorator'

process.on('uncaughtException', function (err) {
  let logException: ILogException = new LogException(err)

  logException = new DateTimeDecorator(logException)
  logException = new VersionDecorator(logException)

  console.log(logException.getExceptionData())
})

throw new Error('Vish que deu ruim')
