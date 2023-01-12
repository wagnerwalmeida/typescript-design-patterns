import { StateBronze } from './state-bronze.implementation'
import { StateGold } from './state-gold.implementation'
import { StateSilver } from './state-silver.implementation'
import { IState } from './state.interface'

export class ApplyDiscountContext implements IState {
  private state: IState
  constructor() {
    this.state = new StateBronze(0)
  }

  addItem(valueOfItem: number) {
    this.state.addItem(valueOfItem)
    this.alterState()
  }
  removeItem(valueOfItem: number) {
    this.state.removeItem(valueOfItem)
    this.alterState()
  }

  getTotalOrder(): number {
    return this.state.getTotalOrder()
  }
  getDiscountValue(): number {
    return this.state.getDiscountValue()
  }
  getShippingValue(): number {
    return this.state.getShippingValue()
  }

  private alterState() {
    const totalOrder = this.state.getTotalOrder()
    if (totalOrder <= 500) this.state = new StateBronze(totalOrder)
    if (totalOrder <= 1_000) this.state = new StateSilver(totalOrder)
    this.state = new StateGold(totalOrder)
  }
}
