export class LoggerSingleton {
  private static instance: LoggerSingleton
  private constructor() {}
  static getInstance(): LoggerSingleton {
    if (!this.instance) this.instance = new LoggerSingleton()
    return this.instance
  }

  public log(text: string): void {
    console.log(text)
  }
}
