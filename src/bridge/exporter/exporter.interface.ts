export interface IExporter<TKeysOfFieldNames extends string> {
  exportData(
    data: Array<Record<TKeysOfFieldNames, string | number | boolean>>
  ): void
}
