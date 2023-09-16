import { Entity } from './entity'

export interface ICommand {
  execute: (entity: Entity) => void | Promise<void>
}
