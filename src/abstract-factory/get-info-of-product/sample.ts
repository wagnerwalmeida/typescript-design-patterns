import { Apple } from './apple.brand-implementation'
import { IBrand } from './brand.interface'
import { Dell } from './dell.brand-implementation'
import { IDesktop } from './desktop.interface'
import { INotebook } from './notebook.interface'

const optionToBrand: Record<'Dell' | 'Apple', () => IBrand> = {
  Dell: () => new Dell(),
  Apple: () => new Apple(),
}

;(async () => {
  const option = 'Dell'
  let brand: IBrand

  brand = optionToBrand[option]()

  const notebook: INotebook = brand.consultNotebook()
  const desktop: IDesktop = brand.consultDesktop()

  console.log({
    notebook: {
      ScreenSize: notebook.getScreenSize(),
      MemoryRAM: notebook.getMemoryRAM(),
    },
    desktop: {
      HdCapacity: desktop.getHdCapacity(),
      ProcessorName: desktop.getProcessorName(),
    },
  })
})()
