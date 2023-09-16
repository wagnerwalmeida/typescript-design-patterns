import { ICommand } from './comand.interface'
import { Entity } from './entity'

export class FirstCommand implements ICommand {
  async execute(entity: Entity): Promise<void> {
    entity.executeFirst()
    console.log(entity)
  }
}
