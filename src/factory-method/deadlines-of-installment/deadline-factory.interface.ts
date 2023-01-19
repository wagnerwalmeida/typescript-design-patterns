import { IDeadlineType } from './deadline-type.interface'

export interface IDeadlineFactory {
  consultDeadline(deadline: string): IDeadlineType
}
