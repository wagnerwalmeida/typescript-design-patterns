import { TEmployee } from './employee.abstract-element'
import { IVisitor } from './visitor.interface'

type Props = {
  name: string
  dateAdmission: Date
  salary: number
}

export class Manager extends TEmployee {
  constructor(props: Props) {
    super(props.name, 'manager', props.dateAdmission, props.salary, '')
  }
  accept(visitor: IVisitor): void {
    visitor.visit(this)
  }
}
