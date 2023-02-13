import { TEmployee } from './employee.abstract-element'
import { IVisitor } from './visitor.interface'

type Props = {
  name: string
  dateAdmission: Date
  salary: number
}

export class Programmer extends TEmployee {
  constructor(props: Props) {
    super(props.name, 'programmer', props.dateAdmission, props.salary, '')
  }
  accept(visitor: IVisitor): void {
    visitor.visit(this)
  }
}
