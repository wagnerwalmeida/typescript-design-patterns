const discontsByFidelity: Record<number, (value: number) => number> = {
  0: (value) => value - value * 0.02,
  1: (value) => value - value * 0.06,
  2: (value) => value - value * 0.1,
  3: (value) => value - value * 0.18,
}

export class CalculateStoreOrderSubsystem {
  private applyDiscont(fidelity: number, value: number): number {
    return discontsByFidelity[fidelity]?.(value) ?? 0
  }
  private applyMarginOrder(value: number) {
    return value * 1.35
  }

  calculateFinalValue(fidelity: number, value: number): number {
    let finalValue = this.applyDiscont(fidelity, value)
    finalValue = this.applyMarginOrder(finalValue)

    return finalValue
  }
}
