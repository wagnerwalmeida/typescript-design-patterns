import axios from 'axios'
import { IDistanceCalculator } from './distance-calculator.interface'

export class RealDistanceCalculator implements IDistanceCalculator {
  async calculateDistance(origin: string, destiny: string): Promise<number> {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destiny}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    )
    return response.data.rows[0].elements[0].distance.value / 1_000
  }
}
