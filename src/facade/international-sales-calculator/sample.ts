import fs from 'fs'
import { CalculatorOrder } from '.'
;(async () => {
  const fidelity = 0
  const value = 1234.56

  const calculatorOrder = new CalculatorOrder()

  console.log(await calculatorOrder.calculateOrderValue(fidelity, value))

  fs.readFile('historic.txt', (err, data) => {
    if (err) throw err
    console.log(data.toString('utf-8'))
  })
})()
