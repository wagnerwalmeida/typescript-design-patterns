import { extname } from 'path'
import fs from 'fs'
import { XMLParser as FastXMLParser } from 'fast-xml-parser'
import { Parser } from './parser.abstraction'

export class ParserXML extends Parser {
  processInclusion(filename: string): Object {
    if (extname(filename).toUpperCase() !== '.XML') {
      if (!this.parser) {
        throw new Error('Formato desconhecido.')
      }

      return this.parser.processInclusion(filename)
    }

    if (!fs.existsSync(filename)) throw new Error('Arquivo não existe.')

    const buffer = fs.readFileSync(filename)

    // const dataString = buffer.toString('utf-8').trim()

    const parser = new FastXMLParser()
    const object = parser.parse(buffer)

    return object
  }
}
