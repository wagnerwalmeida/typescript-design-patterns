export interface IFormat {
  skipLine(): void
  exportField(value: string): void
  saveFile(fileName: string): void
}
