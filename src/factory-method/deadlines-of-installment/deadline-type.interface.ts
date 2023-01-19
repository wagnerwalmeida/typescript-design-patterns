export interface IDeadlineType {
  consultDescription(): string
  consultFees(): string
  consultProjection(value: number, numberOfInstallments: number): string
}
