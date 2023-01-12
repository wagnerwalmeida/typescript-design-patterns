import fs from 'fs'
import { IFormat } from './format.interface'

export class JSONFormat implements IFormat {
  private JSON: Array<Record<string, string>> = []
  private line: Array<string> = []
  private header: Array<string> = []
  skipLine(): void {
    if (this.header.length === 0) {
      this.header = [...this.line]
      this.line = []
      return
    }

    this.JSON.push(
      this.header.reduce(
        (prevValue, currentField, index) => ({
          ...prevValue,
          [currentField]: this.line[index],
        }),
        {}
      )
    )
    this.line = []
  }
  exportField(value: string): void {
    this.line.push(value)
  }
  saveFile(fileName: string): void {
    const content = JSON.stringify(this.JSON)

    fs.writeFile(`${fileName}.json`, content, (err) => {
      if (err) return console.log(err)
      console.log('The file was saved!')
    })
  }
}
