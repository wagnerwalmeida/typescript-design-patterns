import { ICommand } from './comand.interface'
import { Entity } from './entity'

export class SecondCommand implements ICommand {
  async execute(entity: Entity): Promise<void> {
    entity.executeSecond()
    console.log(entity)
  }
}
