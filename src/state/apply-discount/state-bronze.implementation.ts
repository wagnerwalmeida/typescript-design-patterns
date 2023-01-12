import { StateBase } from './state-base.abstract'

export class StateBronze extends StateBase {
  getDiscountValue(): number {
    if (this.totalOrder <= 200) return 0
    return this.totalOrder * 0.05
  }
  getShippingValue(): number {
    return this.totalOrder * 0.06
  }
}
