import { ProjectOption } from './option/ProjectOptions';
import { ProjectManager } from './project/ProjectManager';

export abstract class Main {
  public static async main(): Promise<void> {
    let projectOption = new ProjectOption(
      './testgit',
      'testgit',
      'testgit desc',
      'seb',
      'https://github.com/EOS-System/Classic-NPM-TS.git',
    );
    console.log(await (await ProjectManager.createProject(projectOption)).message);
    console.log(await await ProjectManager.getProjectList());
    console.log(await (await ProjectManager.deleteProject(0)).message);
    console.log(await await ProjectManager.getProject(0));
  }
}
Main.main();
