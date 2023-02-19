import { INotification } from './notification.interface'
import { IObserver } from './observer.interface'

export interface ISubject {
  addObserver(observer: IObserver): void
  removeObserver(observer: IObserver): void
  notify(notification: INotification): void
}
