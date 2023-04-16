import { SearchRepositories } from './search-repositories.concrete'
import { SearchUsers } from './search-users.concrete'
import { SearchAbstract } from './search.abstract'

enum SearchType {
  repositories,
  users,
}

const searcherManager: Record<
  SearchType,
  (searchTerm: string) => SearchAbstract
> = {
  '0': (searchTerm) => new SearchRepositories(searchTerm),
  '1': (searchTerm) => new SearchUsers(searchTerm),
}

;(async () => {
  const type: SearchType = SearchType.users
  const searchTerm = 'wagnerwalmeida'
  const searcher: SearchAbstract = searcherManager[type](searchTerm)

  console.log(await searcher.searchDataGithub())
})()
