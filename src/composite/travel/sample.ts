import { Travel, TravelPackage } from './'

const travels = [
  new Travel('São Paulo', 'Recife', new Date('2023-07-10 00:00:00')),
  new Travel('São Paulo', 'Recife', new Date('2023-07-10 00:00:00')),
  new Travel('São Paulo', 'Recife', new Date('2023-07-10 00:00:00')),
  new Travel('São Paulo', 'Recife', new Date('2023-07-10 00:00:00')),
]

const travelPackage = new TravelPackage()
travels.forEach((travel) => travelPackage.addTravel(travel))

console.log({
  travels: travels.map((travel) => travel.calculateValue()),
  travelPackageAmount: travelPackage.calculateValue(),
})
