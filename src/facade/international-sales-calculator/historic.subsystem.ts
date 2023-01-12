import fs from 'fs'

const formatterReal = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
})

export class HistoricSubsystem {
  registerHistoricOfCalculation(
    dollar: number,
    value: number,
    finalValueOrder: number
  ) {
    const text = ''.concat(
      `${'-'.repeat(50)}\n`,
      `Data..............: ${new Date().toLocaleString()}\n`,
      `Cotação do Dólar..: ${formatterReal.format(dollar)}\n`,
      `Conversão em R$...: ${formatterReal.format(dollar * value)}\n`,
      `Preço final.......: ${formatterReal.format(finalValueOrder)}\n`
    )

    fs.appendFile('historic.txt', text, (err) => {
      if (err) throw err
    })
  }
}
