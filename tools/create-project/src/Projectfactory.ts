import { stringify } from 'querystring';
import { Git } from './Git';
import { ProjectOption } from './option/ProjectOptions';
import { CommandUtils } from './utils/CommandUtils';
import { FileUtils } from './utils/FileUtils';

export abstract class ProjectFactory {
  private static _defaultRepo = 'https://github.com/BabylonJS/npm-package-template';
  private static _reactNativeRepo = '';
  public static async createDefaultProject(
    projectOption: ProjectOption,
    onProgress?: (onProgress: string) => void,
    onError?: (onError: string) => void,
  ): Promise<void> {
    onProgress && onProgress('Creating project at ' + projectOption.path);
    onProgress && onProgress('Cloning repository...');
    const rep = await Git.Clone(ProjectFactory._defaultRepo, projectOption.path);
    if (!rep.status) {
      onError && onError(rep.message);
      return;
    }

    const removeGitFolder = await FileUtils.deleteFolder(projectOption.path + '/.git');
    if (!removeGitFolder.status) {
      onError && onError(removeGitFolder.message);
      return;
    }

    onProgress && onProgress('Configure...');
    const readConfigFile = await FileUtils.readFile(projectOption.path + '/package.json');
    if (!readConfigFile.status) {
      onError && onError(readConfigFile.message);
      return;
    }
    const newConfigFile = ProjectFactory.configure(readConfigFile.message, projectOption);
    const writeConfigFile = await FileUtils.writeFile(projectOption.path + '/package.json', newConfigFile);
    if (!writeConfigFile.status) {
      onError && onError(writeConfigFile.message);
      return;
    }

    onProgress && onProgress('Installing dependencies...');
    const npmInstall = await CommandUtils.executeCommand(projectOption.path, 'npm install');
    if (!npmInstall.status) {
      onError && onError(npmInstall.message);
      return;
    }
  }

  private static configure(fileContent: string, projectOption: ProjectOption): string {
    // convert fileContent to json
    const json = JSON.parse(fileContent);
    // update json
    json.name = projectOption.name;
    json.description = projectOption.description;
    json.author = projectOption.author;
    // convert json to string
    return JSON.stringify(json);
  }
}
