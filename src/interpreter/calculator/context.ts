export class Context {
  public output: string = ''
  constructor(private readonly input: string) {
    this.output = input
  }
}
