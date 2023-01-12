import { IExporter, IFormat } from '.'

export class Exporter<TKeysOfFieldNames extends string>
  implements IExporter<TKeysOfFieldNames>
{
  constructor(
    private readonly format: IFormat,
    private readonly fileName: string,
    private readonly fieldNames: Array<string> = []
  ) {}
  exportData(
    data: Array<Record<TKeysOfFieldNames, string | number | boolean>>
  ): void {
    Object.values(this.fieldNames).forEach((fieldName) =>
      this.format.exportField(fieldName)
    )
    try {
      data.forEach((item) => {
        this.format.skipLine()
        this.fieldNames.forEach((fieldName) => {
          this.format.exportField(String(item[fieldName as TKeysOfFieldNames]))
        })
      })
    } catch (error) {
    } finally {
      this.format.saveFile(this.fileName)
    }
  }
}
