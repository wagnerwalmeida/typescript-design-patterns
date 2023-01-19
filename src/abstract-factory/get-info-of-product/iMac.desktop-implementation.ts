import { IDesktop } from './desktop.interface'

export class IMac implements IDesktop {
  getProcessorName(): string {
    return 'Intel Core i7'
  }
  getHdCapacity(): string {
    return '500 GB'
  }
}
