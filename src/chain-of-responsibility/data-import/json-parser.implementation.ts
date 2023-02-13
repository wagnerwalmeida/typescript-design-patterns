import { extname } from 'path'
import fs from 'fs'
import { Parser } from './parser.abstraction'

export class ParserJSON extends Parser {
  processInclusion(filename: string): Object {
    if (extname(filename).toUpperCase() !== '.JSON') {
      if (!this.parser) {
        throw new Error('Formato desconhecido.')
      }

      return this.parser.processInclusion(filename)
    }

    if (!fs.existsSync(filename)) throw new Error('Arquivo não existe.')

    const buffer = fs.readFileSync(filename)

    const dataString = buffer.toString('utf-8').trim()

    const object = JSON.parse(dataString)

    return object
  }
}
