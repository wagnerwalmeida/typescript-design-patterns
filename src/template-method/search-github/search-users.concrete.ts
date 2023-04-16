import { SearchAbstract } from './search.abstract'

export class SearchUsers extends SearchAbstract {
  constructor(parameter: string) {
    super()
    this.param = `users?q=${parameter}`
  }
  async process(): Promise<any> {
    return this.data
  }
}
