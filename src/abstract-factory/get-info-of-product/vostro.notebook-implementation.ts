import { INotebook } from './notebook.interface'

export class Vostro implements INotebook {
  getScreenSize(): string {
    return '15 polegadas'
  }
  getMemoryRAM(): string {
    return '3GB DDR3'
  }
}
