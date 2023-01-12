import { ITravel } from './travel.interface'

export class Travel implements ITravel {
  private value: number = 0
  constructor(
    private readonly source: string,
    private readonly destination: string,
    private readonly date: Date
  ) {}

  calculateValue(): number {
    if (!this.value)
      this.value = checkCostTravel(this.source, this.destination, this.date)
    return this.value
  }
}

const checkCostTravel = (source: string, destination: string, date: Date) => {
  return Math.round(Math.random() * 1000)
}
