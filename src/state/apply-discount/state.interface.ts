export interface IState {
  addItem: (valueOfItem: number) => void
  removeItem: (valueOfItem: number) => void

  getTotalOrder: () => number
  getDiscountValue: () => number
  getShippingValue: () => number
}
