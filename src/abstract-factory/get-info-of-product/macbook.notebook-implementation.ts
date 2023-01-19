import { INotebook } from './notebook.interface'

export class Macbook implements INotebook {
  getScreenSize(): string {
    return '11.6 polegadas'
  }
  getMemoryRAM(): string {
    return '4GB DDR3'
  }
}
