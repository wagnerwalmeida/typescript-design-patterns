import { IDesktop } from './desktop.interface'
import { INotebook } from './notebook.interface'

export interface IBrand {
  consultNotebook(): INotebook
  consultDesktop(): IDesktop
}
