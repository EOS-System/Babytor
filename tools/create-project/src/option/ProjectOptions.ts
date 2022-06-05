export class ProjectOption {
  public readonly path: string;
  public readonly name: string;
  public readonly description: string;
  public readonly author: string;

  public constructor(path: string, name: string, description: string, author: string) {
    this.path = path;
    this.name = name;
    this.description = description;
    this.author = author;
  }
}
