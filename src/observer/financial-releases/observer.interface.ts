import { INotification } from './notification.interface'

export interface IObserver {
  update(notification: INotification): void
}
