import axios from 'axios'

const getterDollarQuotation = async (): Promise<number> => {
  try {
    const result = await axios(
      'https://economia.awesomeapi.com.br/json/last/USD-BRL'
    )
    const resultJson = await result.data
    const dollarQuotation = Number(resultJson.USDBRL.bid)
    return dollarQuotation
  } catch (error) {
    return 0
  }
}

export class GetDollarQuotationSubsystem {
  async execute(): Promise<number> {
    return await getterDollarQuotation()
  }
}
