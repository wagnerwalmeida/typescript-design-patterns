import { faker } from '@faker-js/faker'

import { CostumerExporter, CSVFormat, HTMLFormat, JSONFormat } from './'

const exporter = new CostumerExporter(new JSONFormat(), 'Clientes')

exporter.exportData(
  faker.datatype.array(200).map(() => ({
    ID: faker.datatype.uuid(),
    Name: faker.name.fullName(),
    City: faker.address.cityName(),
  }))
)
