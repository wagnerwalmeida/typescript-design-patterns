import fs from 'fs'
import { IFormat } from './format.interface'

export class HTMLFormat implements IFormat {
  private HTML: Array<string> = []

  constructor() {
    this.HTML.push('<html>')
    this.HTML.push('<body>')
    this.HTML.push('<table border="1">')
    this.HTML.push('<tr>')
  }

  skipLine(): void {
    this.HTML.push('</tr><tr>')
  }
  exportField(value: string): void {
    this.HTML.push(`<td>${value}</td>`)
  }
  saveFile(fileName: string): void {
    this.HTML.push('</tr>')
    this.HTML.push('</table>')
    this.HTML.push('</body>')
    this.HTML.push('</html>')

    fs.writeFile(`${fileName}.html`, this.HTML.join(''), (err) => {
      if (err) return console.log(err)
      console.log('The file was saved!')
    })
  }
}
