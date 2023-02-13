import { TEmployee, ERole } from './employee.abstract-element'
import { IVisitor } from './visitor.interface'

const YearsBetween = (date_1: Date, date_2: Date) => {
  let difference = date_1.getTime() - date_2.getTime()
  let TotalYears = Math.floor(difference / (1000 * 3600 * 24 * 365))
  return TotalYears
}

const numberRange = (start: number, end: number) => {
  return [...new Array(end - start).fill(0).map((d, i) => i + start), end]
}

const mapSeniorityByRole: Record<ERole, (employee: TEmployee) => void> = {
  programmer: (employee: TEmployee): void => {
    const quantityOfYearsWorked = YearsBetween(
      new Date(),
      employee.dateAdmission
    )
    if (quantityOfYearsWorked in numberRange(0, 1))
      employee.seniority = 'Júnior'
    if (quantityOfYearsWorked in numberRange(2, 3)) employee.seniority = 'Pleno'
    if (quantityOfYearsWorked in numberRange(4, 5))
      employee.seniority = 'Sênior'
    if (quantityOfYearsWorked in numberRange(6, 10))
      employee.seniority = 'Especialista'
    if (quantityOfYearsWorked > 10) employee.seniority = 'Mestre'
  },
  manager: (employee: TEmployee): void => {
    const quantityOfYearsWorked = YearsBetween(
      new Date(),
      employee.dateAdmission
    )

    if (numberRange(0, 2).includes(quantityOfYearsWorked))
      employee.seniority = 'Qualificado'
    if (numberRange(3, 5).includes(quantityOfYearsWorked))
      employee.seniority = 'Profissional'
    if (numberRange(6, 8).includes(quantityOfYearsWorked))
      employee.seniority = 'Experiente'
    if (quantityOfYearsWorked > 8) employee.seniority = 'Mestre'
  },
}

export class SeniorityVisitor implements IVisitor {
  visit(employee: TEmployee): void {
    mapSeniorityByRole[employee.role](employee)
  }
}
