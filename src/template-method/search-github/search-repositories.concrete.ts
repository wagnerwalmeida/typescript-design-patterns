import { SearchAbstract } from './search.abstract'

export class SearchRepositories extends SearchAbstract {
  constructor(parameter: string) {
    super()
    this.param = `repositories?q=${parameter}`
  }
  async process(): Promise<any> {
    return this.data
  }
}
