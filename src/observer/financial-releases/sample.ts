import { Balance } from './balance.observer'
import { Grouping } from './grouping.observer'
import { RegisterOperations } from './register-operations.subject'

const register = new RegisterOperations()

register.addObserver(new Balance())
register.addObserver(new Grouping())

register.notify({ operation: 'Crédito', category: 'Salário', amount: 2_300 })
register.notify({ operation: 'Débito', category: 'Supermercado', amount: 400 })
register.notify({ operation: 'Débito', category: 'Aluguel', amount: 1_000 })
