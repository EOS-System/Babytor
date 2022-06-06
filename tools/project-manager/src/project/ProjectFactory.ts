import { ResponseData } from '../data/ResponseData';
import { ProjectOption } from '../option/ProjectOptions';
import { Git } from '../tool/Git';
import { CommandUtils } from '../utils/CommandUtils';
import { FileUtils } from '../utils/FileUtils';

export abstract class ProjectFactory {
  public static async createDefaultProject(
    projectOption: ProjectOption,
    onProgress?: (onProgress: string) => void,
  ): Promise<ResponseData> {
    onProgress && onProgress('Creating project at ' + projectOption.path);
    onProgress && onProgress('Cloning repository...');
    const rep = await Git.Clone(projectOption.repo, projectOption.path);
    if (!rep.status) return new ResponseData(false, rep.message);

    const removeGitFolder = await FileUtils.deleteFolder(projectOption.path + '/.git');
    if (!removeGitFolder.status) return new ResponseData(false, removeGitFolder.message);

    onProgress && onProgress('Configure...');
    const readConfigFile = await FileUtils.readFile(projectOption.path + '/package.json');
    if (!readConfigFile.status) {
      return new ResponseData(false, readConfigFile.message);
    }
    const newConfigFile = ProjectFactory.configure(readConfigFile.message, projectOption);
    const writeConfigFile = await FileUtils.writeFile(projectOption.path + '/package.json', newConfigFile);
    if (!writeConfigFile.status) return new ResponseData(false, writeConfigFile.message);

    onProgress && onProgress('Installing dependencies...');
    const npmInstall = await CommandUtils.executeCommand(projectOption.path, 'npm install');
    if (!npmInstall.status) return new ResponseData(false, npmInstall.message);
    return new ResponseData(true, 'Project created');
  }

  private static configure(fileContent: string, projectOption: ProjectOption): string {
    const json = JSON.parse(fileContent);
    json.name = projectOption.name;
    json.description = projectOption.description;
    json.author = projectOption.author;
    return JSON.stringify(json);
  }
}
