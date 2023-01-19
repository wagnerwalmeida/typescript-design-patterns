import { IDeadlineFactory } from './deadline-factory.interface'
import { IDeadlineType } from './deadline-type.interface'
import { MonthlyDeadline } from './monthly-deadline.implementation'
import { YearlyDeadline } from './yearly-deadline.implementation'

enum EDeadlineTypes {
  'monthly' = 'monthly',
  'yearly' = 'yearly',
}

type KeysOfEDeadlineTypes = keyof typeof EDeadlineTypes

const mapDeadlineTypes: Record<KeysOfEDeadlineTypes, () => IDeadlineType> = {
  monthly: () => new MonthlyDeadline(),
  yearly: () => new YearlyDeadline(),
}

export class DeadlineFactory implements IDeadlineFactory {
  consultDeadline(deadline: KeysOfEDeadlineTypes): IDeadlineType {
    return mapDeadlineTypes[deadline]()
  }
}
