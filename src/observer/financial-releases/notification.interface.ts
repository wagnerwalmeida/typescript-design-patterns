enum EOperation {
  Crédito,
  Débito,
}

export type TOperation = keyof typeof EOperation

export interface INotification {
  operation: TOperation
  category: string
  amount: number
}
