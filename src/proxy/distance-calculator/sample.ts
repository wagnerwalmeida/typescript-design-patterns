import * as dotenv from 'dotenv'
dotenv.config()

import { ProxyDistanceCalculator } from './proxy-distance-calculator.implementation'
;(async () => {
  const distanceCalculator = new ProxyDistanceCalculator()

  const distance1 = await distanceCalculator.calculateDistance('Avaré', 'Bauru')
  const distance3 = await distanceCalculator.calculateDistance(
    'Bauru',
    'Sorocaba'
  )
  const distance2 = await distanceCalculator.calculateDistance('Avaré', 'Bauru')

  console.log({
    distance1,
    distance2,
    distance3,
  })
})()
