import { IDeadlineType } from './deadline-type.interface'

export class YearlyDeadline implements IDeadlineType {
  consultDescription(): string {
    return 'Prazo Anual para Pagamento'
  }
  consultFees(): string {
    return 'Juros de 10,5% simples ao ano'
  }
  consultProjection(value: number, numberOfInstallments: number): string {
    const projection: Array<string> = []
    let adjustedValue = value
    const installmentDate = new Date()

    for (let index = 1; index <= numberOfInstallments; index++) {
      adjustedValue += value * 0.105
      installmentDate.setMonth(installmentDate.getMonth() + 12)

      projection.push(
        `Parcela ${index} (${installmentDate.toLocaleDateString()}): ${adjustedValue.toLocaleString()}`
      )
    }

    return projection.join('\n')
  }
}
