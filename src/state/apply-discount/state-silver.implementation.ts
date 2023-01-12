import { StateBase } from './state-base.abstract'

export class StateSilver extends StateBase {
  getDiscountValue(): number {
    let result = this.totalOrder * 0.07
    if (this.totalOrder > 700) result = result * 0.02
    return result
  }
  getShippingValue(): number {
    return this.totalOrder * 0.05
  }
}
