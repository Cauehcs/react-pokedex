export class Pokemon {
  private name: string;
  private type: "fire" | "water" | "grass";
  private id: number;
  private spriteUrl: string;

  constructor(parameters: {
    name: string;
    type: "fire" | "water" | "grass";
    id: number;
    spriteUrl: string;
  }) {
    this.name = parameters.name;
    this.type = parameters.type;
    this.id = parameters.id;
    this.spriteUrl = parameters.spriteUrl;
  }

  public getName(): String {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getType(): typeof this.type {
    return this.type;
  }

  public setType(type: typeof this.type): void {
    this.type = type;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getSpriteUrl(): string {
    return this.spriteUrl;
  }

  public setSpriteUrl(spriteUrl: string): void {
    this.spriteUrl = spriteUrl;
  }
}
