import { FileUtils } from '../utils/FileUtils';

export class ProjectOption {
  public readonly path: string;
  public readonly name: string;
  public readonly description: string;
  public readonly author: string;
  public readonly repo: string;
  public readonly timestamp: number;

  public constructor(path: string, name: string, description: string, author: string, repo: string) {
    this.path = FileUtils.toAbsolutePath(path);
    this.name = name;
    this.description = description;
    this.author = author;
    this.repo = repo;
    this.timestamp = Date.now();
  }
}
