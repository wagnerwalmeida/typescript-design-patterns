import { TEmployee, ERole } from './employee.abstract-element'
import { IVisitor } from './visitor.interface'

const DaysBetween = (date_1: Date, date_2: Date) => {
  let difference = date_1.getTime() - date_2.getTime()
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))
  return TotalDays
}
const YearsBetween = (date_1: Date, date_2: Date) => {
  let difference = date_1.getTime() - date_2.getTime()
  let TotalYears = Math.floor(difference / (1000 * 3600 * 24 * 365))
  return TotalYears
}

const numberRange = (start: number, end: number) => {
  return [...new Array(end - start).fill(0).map((d, i) => i + start), end]
}

const mapSalaryByRole: Record<ERole, (employee: TEmployee) => void> = {
  programmer: (employee: TEmployee): void => {
    employee.salary = employee.salary * 1.06
    const percentagePerWorkedDay =
      DaysBetween(new Date(), employee.dateAdmission) * 0.002
    employee.salary = employee.salary * (1 + percentagePerWorkedDay / 100)
  },
  manager: (employee: TEmployee): void => {
    employee.salary = employee.salary * 1.08
    const quantityOfYearsWorked = YearsBetween(
      new Date(),
      employee.dateAdmission
    )

    if (quantityOfYearsWorked in numberRange(2, 3))
      employee.salary = employee.salary * 1.03
    if (quantityOfYearsWorked in numberRange(4, 5))
      employee.salary = employee.salary * 1.04
    if (quantityOfYearsWorked in numberRange(6, 10))
      employee.salary = employee.salary * 1.05
    if (quantityOfYearsWorked > 10) employee.salary = employee.salary * 1.07
  },
}

export class SalaryVisitor implements IVisitor {
  visit(employee: TEmployee): void {
    mapSalaryByRole[employee.role](employee)
  }
}
