import { IDistanceCalculator } from './distance-calculator.interface'
import { RealDistanceCalculator } from './real-distance-calculator.implementation'

export class ProxyDistanceCalculator implements IDistanceCalculator {
  private realDistanceCalculator: IDistanceCalculator | undefined
  private distances: Record<string, number> = {}

  async calculateDistance(origin: string, destiny: string): Promise<number> {
    const savedDistance = this.distances[`${origin};${destiny}`]
    if (savedDistance) return savedDistance

    if (!this.realDistanceCalculator)
      this.realDistanceCalculator = new RealDistanceCalculator()

    const distance = await this.realDistanceCalculator.calculateDistance(
      origin,
      destiny
    )
    this.distances[`${origin};${destiny}`] = distance

    return distance
  }
}
