import axios, { Axios, AxiosInstance } from 'axios'

export abstract class SearchAbstract {
  private http: Axios | undefined
  protected data: any
  protected param: string = ''

  private async config(): Promise<void> {
    this.http = new Axios({
      baseURL: 'https://api.github.com/search/',
    })
  }

  private async handleRequest(): Promise<void> {
    if (this.http) {
      const response = await this.http.get(this.param)
      this.data = response.data
    }
  }

  public async searchDataGithub(): Promise<any> {
    await this.config()
    await this.handleRequest()
    return await this.process()
  }

  abstract process(): Promise<any>
}
