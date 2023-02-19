import { INotification } from './notification.interface'
import { IObserver } from './observer.interface'
import { ISubject } from './subject.interface'

export class RegisterOperations implements ISubject {
  private observers: Array<IObserver> = []
  addObserver(observer: IObserver): void {
    this.observers.push(observer)
  }
  removeObserver(observer: IObserver): void {
    delete this.observers[this.observers.findIndex((item) => item === observer)]
  }
  notify(notification: INotification): void {
    this.observers.forEach((observer) => observer.update(notification))
  }
}
