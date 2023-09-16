import { Entity } from './entity'
import { FirstCommand } from './first.command'
import { Processor } from './processor'
import { SecondCommand } from './second.command'
import { ThirdCommand } from './third.command'

const entity = new Entity()

const processor = new Processor(entity)

processor
  .appendCommand(new FirstCommand())
  .appendCommand(new SecondCommand())
  .appendCommand(new ThirdCommand())
  .executeCommands()
