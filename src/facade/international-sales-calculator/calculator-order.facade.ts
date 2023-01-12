import {
  GetDollarQuotationSubsystem,
  CalculateStoreOrderSubsystem,
  HistoricSubsystem,
} from '.'

export class CalculatorOrder {
  async calculateOrderValue(fidelity: number, value: number): Promise<number> {
    const getDollarQuotationSubsystem = new GetDollarQuotationSubsystem()
    const calculateStoreOrder = new CalculateStoreOrderSubsystem()
    const historicSubsystem = new HistoricSubsystem()

    const dollarQuotation = await getDollarQuotationSubsystem.execute()
    let orderValue = value * dollarQuotation
    orderValue = calculateStoreOrder.calculateFinalValue(fidelity, orderValue)
    historicSubsystem.registerHistoricOfCalculation(
      dollarQuotation,
      value,
      orderValue
    )

    return orderValue
  }
}
