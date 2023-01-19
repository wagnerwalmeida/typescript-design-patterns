import { DeadlineFactory } from './deadline-factory.implementation'
;(async () => {
  const deadlineFactory = new DeadlineFactory()
  const deadlineType = deadlineFactory.consultDeadline('yearly')

  const value = 1000
  const numberOfInstallments = 12

  console.log({
    'Descrição: ': deadlineType.consultDescription(),
    'Consulta de Prazo: ': deadlineType.consultFees(),
    'Projeção:':
      '\n' + deadlineType.consultProjection(value, numberOfInstallments),
  })
})()
