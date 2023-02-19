import { INotification } from './notification.interface'
import { IObserver } from './observer.interface'

export class Grouping implements IObserver {
  private categories: Map<string, number> = new Map()
  update(notification: INotification): void {
    const amount = this.categories.get(notification.category) ?? 0
    this.categories.set(notification.category, amount + notification.amount)
    this.categories.forEach((amount, category) =>
      console.log(`Category: ${category} - Amount: ${amount}`)
    )
  }
}
