import { Context } from './context'
import { EPriorityOperations } from './priority-operations.enum'

export abstract class AbstractOperation {
  private regex: RegExp
  constructor(private readonly symbol: string) {
    const regexExpression =
      '\\+?\\-?\\s?\\d+(?:[\\.\\,]\\d*)?\\s?[' +
      this.symbol +
      ']\\s?\\d+(?:[\\.\\,]\\d*)?'
    this.regex = new RegExp(regexExpression)
  }
  abstract priority: EPriorityOperations
  abstract interpret(context: Context): void
  basicMatchAndReplace(
    context: Context,
    onMatch: (left: string, right: string) => string
  ) {
    const matchArray = context.output.match(this.regex)

    if (matchArray && matchArray.length > 0) {
      const expression = matchArray[0]

      const resultArray = expression
        .replace(' ', '')
        .split(this.symbol)
        .map((exp) => exp.trim())

      const left = resultArray[resultArray.length - 2]
      const right = resultArray[resultArray.length - 1]

      context.output = context.output.replace(
        expression,
        `${onMatch(left.replace('+', ''), right)}`
      )

      this.interpret(context)
    }
  }
}
