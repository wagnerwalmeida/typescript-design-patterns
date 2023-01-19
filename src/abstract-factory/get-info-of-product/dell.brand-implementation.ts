import { IBrand } from './brand.interface'
import { IDesktop } from './desktop.interface'
import { Inspiron } from './inspiron.desktop-implementation'
import { INotebook } from './notebook.interface'
import { Vostro } from './vostro.notebook-implementation'

export class Dell implements IBrand {
  consultNotebook(): INotebook {
    return new Vostro()
  }
  consultDesktop(): IDesktop {
    return new Inspiron()
  }
}
