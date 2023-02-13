import { IParser } from './parser.interface'
import { ParserCSV } from './csv-parser.implementation'
import { ParserXML } from './xml-parser.implementation'
import { ParserJSON } from './json-parser.implementation'
;(async () => {
  const csvParser: IParser = new ParserCSV()
  const xmlParser: IParser = new ParserXML()
  const jsonParser: IParser = new ParserJSON()

  csvParser.setNextParser(xmlParser).setNextParser(jsonParser)

  console.log(
    csvParser.processInclusion('<PATH OF A FILE FROM INSIDE YOUR COMPUTER>')
  )
})()
