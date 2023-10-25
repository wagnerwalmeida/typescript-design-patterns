import { Context } from './context'
import { AbstractOperation } from './operations.abstract'
import { EPriorityOperations } from './priority-operations.enum'

export class AdditionOperation extends AbstractOperation {
  constructor() {
    super('+')
  }
  priority: EPriorityOperations = EPriorityOperations.Fifth
  interpret(context: Context): void {
    this.basicMatchAndReplace(context, (left, right) => {
      const result = Number(left) + Number(right)

      return `${result >= 0 ? `+${result}` : result}`
    })
  }
}
