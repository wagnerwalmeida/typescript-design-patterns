import fs from 'fs'
import { IFormat } from './format.interface'

export class CSVFormat implements IFormat {
  private CSV: Array<string> = []
  private line: Array<string> = []
  skipLine(): void {
    this.CSV.push(this.line.join(','))
    this.line = []
  }
  exportField(value: string): void {
    this.line.push(value)
  }
  saveFile(fileName: string): void {
    const content = this.CSV.join('\n')

    fs.writeFile(`${fileName}.csv`, content, (err) => {
      if (err) return console.log(err)
      console.log('The file was saved!')
    })
  }
}
