import { IDeadlineType } from './deadline-type.interface'

export class MonthlyDeadline implements IDeadlineType {
  consultDescription(): string {
    return 'Prazo Mensal para Pagamento'
  }
  consultFees(): string {
    return 'Juros de 3,1% simples ao mês'
  }
  consultProjection(value: number, numberOfInstallments: number): string {
    const projection: Array<string> = []
    let adjustedValue = value
    const installmentDate = new Date()

    for (let index = 1; index <= numberOfInstallments; index++) {
      adjustedValue += value * 0.031
      installmentDate.setMonth(installmentDate.getMonth() + index)

      projection.push(
        `Parcela ${index} (${installmentDate.toLocaleDateString()}): ${adjustedValue.toLocaleString()}`
      )
    }

    return projection.join('\n')
  }
}
