export interface IDistanceCalculator {
  calculateDistance(origin: string, destiny: string): Promise<number>
}
