import { ProjectOption } from './option/ProjectOptions';
import { ProjectFactory } from './Projectfactory';

export abstract class Main {
  public static async main(): Promise<void> {
    let projectOption = new ProjectOption('./testgit', 'testgit', 'testgit desc', 'seb');
    await ProjectFactory.createDefaultProject(
      projectOption,
      (onProgress: string) => {
        console.log(onProgress);
      },
      (onError: string) => {
        console.log(onError);
      },
    );
  }
}
