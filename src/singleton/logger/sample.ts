import { LoggerSingleton } from './'

const logger = LoggerSingleton.getInstance()
const logger2 = LoggerSingleton.getInstance()

logger.log('VISH 1')
logger2.log('VISH 2')

console.assert(logger === logger2)
