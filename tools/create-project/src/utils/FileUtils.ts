import * as fs from 'fs';
import { ResponseData } from '../ResponseData';
export class FileUtils {
  public static async readFile(path: string): Promise<ResponseData> {
    return new Promise<ResponseData>((resolve) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) resolve(new ResponseData(false, err.message));
        else resolve(new ResponseData(true, data));
      });
    });
  }

  public static async writeFile(path: string, data: string): Promise<ResponseData> {
    return new Promise<ResponseData>((resolve) => {
      fs.writeFile(path, data, (err) => {
        if (err) resolve(new ResponseData(false, err.message));
        else resolve(new ResponseData(true, 'File written'));
      });
    });
  }

  public static async appendFile(path: string, data: string): Promise<ResponseData> {
    return new Promise<ResponseData>((resolve) => {
      fs.appendFile(path, data, (err) => {
        if (err) resolve(new ResponseData(false, err.message));
        else resolve(new ResponseData(true, 'File appended'));
      });
    });
  }

  public static async deleteFile(path: string): Promise<ResponseData> {
    return new Promise<ResponseData>((resolve) => {
      fs.unlink(path, (err) => {
        if (err) resolve(new ResponseData(false, err.message));
        else resolve(new ResponseData(true, 'File deleted'));
      });
    });
  }

  public static async deleteFolder(path: string): Promise<ResponseData> {
    return new Promise<ResponseData>((resolve) => {
      fs.rm(path, { recursive: true }, (err) => {
        if (err) resolve(new ResponseData(false, err.message));
        else resolve(new ResponseData(true, 'Folder deleted'));
      });
    });
  }

  public static async createFolder(path: string): Promise<ResponseData> {
    return new Promise<ResponseData>((resolve) => {
      fs.mkdir(path, (err) => {
        if (err) resolve(new ResponseData(false, err.message));
        else resolve(new ResponseData(true, 'Folder created'));
      });
    });
  }

  public static async isFile(path: string): Promise<ResponseData> {
    return new Promise<ResponseData>((resolve) => {
      fs.stat(path, (err, stats) => {
        if (err) {
          resolve(new ResponseData(false, err.message));
        } else if (stats.isFile()) {
          resolve(new ResponseData(true, "It's a file"));
        } else resolve(new ResponseData(false, "It's not a file"));
      });
    });
  }

  public static async isFolder(path: string): Promise<ResponseData> {
    return new Promise<ResponseData>((resolve) => {
      fs.stat(path, (err, stats) => {
        if (err) {
          resolve(new ResponseData(false, err.message));
        } else if (stats.isDirectory()) {
          resolve(new ResponseData(true, "It's a folder"));
        } else resolve(new ResponseData(false, "It's not a folder"));
      });
    });
  }

  public static async getFiles(path: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      fs.readdir(path, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });
  }

  public static async getFolders(path: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      fs.readdir(path, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files.filter((file) => fs.statSync(`${path}/${file}`).isDirectory()));
        }
      });
    });
  }

  public static async getFilesAndFolders(path: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      fs.readdir(path, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });
  }

  public static async getFilesAndFoldersRecursive(path: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      fs.readdir(path, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });
  }

  public static async getFilesRecursive(path: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      fs.readdir(path, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });
  }

  public static async getFoldersRecursive(path: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      fs.readdir(path, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files.filter((file) => fs.statSync(`${path}/${file}`).isDirectory()));
        }
      });
    });
  }
}
