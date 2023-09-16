import { ICommand } from './comand.interface'
import { Entity } from './entity'

export class Processor {
  constructor(private entity: Entity) {}
  private commands: Array<ICommand> = []
  public appendCommand(command: ICommand) {
    this.commands.push(command)
  }
  public executeCommands() {
    this.commands.forEach(async (command) => await command.execute(this.entity))
  }
}
