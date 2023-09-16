export class Entity {
  protected name: string = ''
  public executeFirst() {
    this.name = 'First'
  }
  public executeSecond() {
    this.name = 'Second'
  }
  public executeThird() {
    this.name = 'Third'
  }
}
