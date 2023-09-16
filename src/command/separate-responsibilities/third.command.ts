import { ICommand } from './comand.interface'
import { Entity } from './entity'

export class ThirdCommand implements ICommand {
  async execute(entity: Entity): Promise<void> {
    entity.executeThird()
    console.log(entity)
  }
}
