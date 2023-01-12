import { IFormat } from '.'
import { Exporter } from './exporter.implementation'

enum FieldNames {
  ID = 'ID',
  Name = 'Nome',
  City = 'Cidade',
}

type KeysOfFieldNames = keyof typeof FieldNames

export class CostumerExporter extends Exporter<KeysOfFieldNames> {
  constructor(format: IFormat, fileName: string) {
    super(format, fileName, Object.keys(FieldNames))
  }
  exportData(
    data: Array<Record<KeysOfFieldNames, string | number | boolean>>
  ): void {
    super.exportData(data)
  }
}
