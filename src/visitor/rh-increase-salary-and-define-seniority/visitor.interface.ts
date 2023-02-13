import { TEmployee } from './employee.abstract-element'

export interface IVisitor {
  visit(employee: TEmployee): void
}
