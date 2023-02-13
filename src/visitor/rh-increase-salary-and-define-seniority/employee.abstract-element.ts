import { IElement } from './element.interface'
import { IVisitor } from './visitor.interface'

export enum ERole {
  programmer = 'programmer',
  manager = 'manager',
}

type TKeysOfERole = keyof typeof ERole

export abstract class TEmployee implements IElement {
  constructor(
    public name: string,
    public role: TKeysOfERole,
    public dateAdmission: Date,
    public salary: number,
    public seniority: string
  ) {}
  abstract accept(visitor: IVisitor): void
}
