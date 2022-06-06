import { ResponseData } from '../data/ResponseData';
import { ProjectOption } from '../option/ProjectOptions';
import { FileUtils } from '../utils/FileUtils';
import { ProjectFactory } from './ProjectFactory';

export class ProjectManager {
  private static projectListPath = './projects.json';
  public static async createProject(projectOption: ProjectOption): Promise<ResponseData> {
    const verifyProject = await ProjectManager.verifyProjectExist(projectOption);
    if (verifyProject.status) return new ResponseData(false, 'Folder already exist');

    const addProj = await ProjectManager.addProjectToList(projectOption);
    if (!addProj.status) return addProj;

    const createProj = await ProjectFactory.createDefaultProject(projectOption, (onProgress: string) => {
      console.log(onProgress);
    });
    if (!createProj.status) return createProj;

    return new ResponseData(true, 'Project created');
  }

  // TODO Add more verification (folder empty ?, folder exist ?, etc...)
  private static async verifyProjectExist(projectOption: ProjectOption): Promise<ResponseData> {
    if (!FileUtils.fileExist(projectOption.path)) return new ResponseData(false, 'Project path does not exist');
    return new ResponseData(true, 'Project path exist');
  }

  private static async addProjectToList(projectOption: ProjectOption): Promise<ResponseData> {
    if (!FileUtils.fileExist(ProjectManager.projectListPath)) await ProjectManager.createProjectListFile();
    const readFile = await FileUtils.readFile(ProjectManager.projectListPath);
    if (!readFile.status) {
      return new ResponseData(false, readFile.message);
    }
    const json = JSON.parse(readFile.message);
    json.projects.push(projectOption);
    const rep = await FileUtils.writeFile(ProjectManager.projectListPath, JSON.stringify(json));
    if (!rep.status) {
      return new ResponseData(false, rep.message);
    }
    return new ResponseData(true, 'Project added');
  }

  private static async createProjectListFile() {
    let json = { projects: [] };
    const rep = await FileUtils.writeFile(ProjectManager.projectListPath, JSON.stringify(json));
    if (!rep.status) {
      return new ResponseData(false, rep.message);
    }
    return new ResponseData(true, 'Project list file created');
  }

  public static async deleteProject(index: number): Promise<ResponseData> {
    if (!FileUtils.fileExist(ProjectManager.projectListPath))
      return new ResponseData(true, 'Project list file does not exist and by definition, project does not exist');

    const readFile = await FileUtils.readFile(ProjectManager.projectListPath);
    if (!readFile.status) return new ResponseData(false, readFile.message);

    const json = JSON.parse(readFile.message);
    const projectToDelete = json.projects[index];
    if (projectToDelete === undefined) return new ResponseData(false, 'Project does not exist');

    await FileUtils.deleteFolder(projectToDelete.path);
    json.projects.splice(index, 1);

    const rep = await FileUtils.writeFile(ProjectManager.projectListPath, JSON.stringify(json));
    if (!rep.status) return new ResponseData(false, rep.message);

    return new ResponseData(true, 'Project deleted');
  }

  public static async getProjectList(): Promise<ResponseData | ProjectOption[]> {
    if (!FileUtils.fileExist(ProjectManager.projectListPath))
      return new ResponseData(true, 'Project list file does not exist and by definition, project does not exist');
    const readFile = await FileUtils.readFile(ProjectManager.projectListPath);
    if (!readFile.status) return new ResponseData(false, readFile.message);
    const json = JSON.parse(readFile.message);
    return json.projects;
  }

  public static async getProject(index: number): Promise<ResponseData | ProjectOption> {
    const projectList = await ProjectManager.getProjectList();
    if (projectList instanceof ResponseData) return projectList;
    const project = projectList[index];
    if (project === undefined) return new ResponseData(false, 'Project does not exist');
    return project;
  }
}
