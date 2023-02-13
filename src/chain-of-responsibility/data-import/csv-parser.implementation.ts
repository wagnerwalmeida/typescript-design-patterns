import { extname } from 'path'
import fs from 'fs'
import { Parser } from './parser.abstraction'

export class ParserCSV extends Parser {
  processInclusion(filename: string): Object {
    if (extname(filename).toUpperCase() !== '.CSV') {
      if (!this.parser) throw new Error('Formato desconhecido.')

      return this.parser.processInclusion(filename)
    }

    if (!fs.existsSync(filename)) throw new Error('Arquivo não existe.')

    const buffer = fs.readFileSync(filename)

    const dataString = buffer.toString('utf-8').trim()

    const arrayData = dataString.split('\n')

    const headers =
      arrayData
        .shift()
        ?.split(',')
        .map((item) => item.trim().replace(/"/g, '')) ?? []

    return arrayData.map((line) => {
      const lineValues = line.split(',')
      const data = lineValues.reduce((prev, actual, index) => {
        return { ...prev, [headers[index]]: actual.trim() }
      }, {})

      return data
    })
  }
}
