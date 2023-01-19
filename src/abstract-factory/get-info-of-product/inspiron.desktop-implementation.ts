import { IDesktop } from './desktop.interface'

export class Inspiron implements IDesktop {
  getProcessorName(): string {
    return 'Intel Core i5'
  }
  getHdCapacity(): string {
    return '1 TB'
  }
}
