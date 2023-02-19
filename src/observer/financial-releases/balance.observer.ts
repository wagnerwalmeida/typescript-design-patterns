import { INotification, TOperation } from './notification.interface'
import { IObserver } from './observer.interface'

export class Balance implements IObserver {
  private operations: Record<TOperation, number> = {
    Crédito: 0,
    Débito: 0,
  }
  update(notification: INotification): void {
    this.operations[notification.operation] += notification.amount
    const balance = this.operations['Crédito'] - this.operations['Débito']
    console.log(
      ''.concat(
        '-'.repeat(30).concat('\n'),
        `Créditos: ${this.operations['Crédito'].toLocaleString()}\n`,
        `Débitos: ${this.operations['Débito'].toLocaleString()}\n`,
        `Saldo: ${balance.toLocaleString()}\n`,
        '-'.repeat(30)
      )
    )
  }
}
