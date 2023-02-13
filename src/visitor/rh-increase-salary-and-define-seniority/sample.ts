import { TEmployee } from './employee.abstract-element'
import { Manager } from './manager.element'
import { Programmer } from './programmer.element'
import { SalaryVisitor } from './salary.visitor'
import { SeniorityVisitor } from './seniority.visitor'
import { IVisitor } from './visitor.interface'

const employeeList: Array<TEmployee> = []

const today = new Date()

employeeList.push(
  new Programmer({
    name: 'First Programmer',
    dateAdmission: today,
    salary: 1_000,
  }),
  new Manager({
    name: 'First Manager',
    dateAdmission: new Date(
      today.getFullYear() - 2,
      today.getMonth(),
      today.getDate()
    ),
    salary: 1_000,
  })
)

const salaryVisitor: IVisitor = new SalaryVisitor()
const seniorityVisitor: IVisitor = new SeniorityVisitor()

employeeList.forEach((employee) => {
  employee.accept(salaryVisitor)
  employee.accept(seniorityVisitor)
})

console.log(
  employeeList.map((employee) => ({
    ...employee,
    dateAdmission: employee.dateAdmission.toLocaleString(),
  }))
)
