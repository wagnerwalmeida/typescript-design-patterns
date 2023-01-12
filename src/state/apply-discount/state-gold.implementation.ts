import { StateBase } from './state-base.abstract'

export class StateGold extends StateBase {
  getDiscountValue(): number {
    return this.totalOrder * 0.18
  }
  getShippingValue(): number {
    if (this.totalOrder > 2_000) return 0
    return this.totalOrder * 0.02
  }
}
