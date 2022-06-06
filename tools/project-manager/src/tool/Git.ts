import 'nodegit';
import { ResponseData } from '../data/ResponseData';
export abstract class Git {
  public static async Clone(repo: string, path: string): Promise<ResponseData> {
    try {
      let NodeGit = require('nodegit');
      await NodeGit.Clone(repo, path);
      return new ResponseData(true, 'Repository cloned');
    } catch (error) {
      return new ResponseData(false, (error as Error).message);
    }
  }
}
