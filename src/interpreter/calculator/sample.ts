import { Context } from './context'
import { AbstractOperation } from './operations.abstract'
import { AdditionOperation } from './addition.operation'
import { DivisionOperation } from './division.operation'
import { MultiplicationOperation } from './multiplication.operation'
import { SubtractionOperation } from './subtraction.operation'

const context = new Context('2 + 3 * 4 - 1 / 5 + 8')

const listOfOperations: Array<AbstractOperation> = [
  new AdditionOperation(),
  new MultiplicationOperation(),
  new SubtractionOperation(),
  new DivisionOperation(),
]

console.log(context.output)
listOfOperations
  .sort((a, b) => a.priority - b.priority)
  .forEach((operation) => operation.interpret(context))

console.log(context.output)
