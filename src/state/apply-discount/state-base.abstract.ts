import { IState } from './state.interface'

export abstract class StateBase implements IState {
  constructor(protected totalOrder: number) {}
  addItem(valueOfItem: number): void {
    this.totalOrder += valueOfItem
  }
  removeItem(valueOfItem: number): void {
    this.totalOrder -= valueOfItem
  }
  getTotalOrder(): number {
    return this.totalOrder
  }
  abstract getDiscountValue(): number
  abstract getShippingValue(): number
}
