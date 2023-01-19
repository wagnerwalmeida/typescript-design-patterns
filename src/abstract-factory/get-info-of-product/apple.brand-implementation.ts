import { IBrand } from './brand.interface'
import { IDesktop } from './desktop.interface'
import { IMac } from './iMac.desktop-implementation'
import { Macbook } from './macbook.notebook-implementation'
import { INotebook } from './notebook.interface'

export class Apple implements IBrand {
  consultNotebook(): INotebook {
    return new Macbook()
  }
  consultDesktop(): IDesktop {
    return new IMac()
  }
}
