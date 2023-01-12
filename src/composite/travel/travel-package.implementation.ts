import { Travel } from './travel.implementation'
import { ITravel } from './travel.interface'

export class TravelPackage implements ITravel {
  private travels: Array<Travel> = []

  public addTravel(travel: Travel) {
    this.travels.push(travel)
  }

  calculateValue(): number {
    return this.travels.reduce<number>(
      (prevValue, currentTravel) => prevValue + currentTravel.calculateValue(),
      0
    )
  }
}
