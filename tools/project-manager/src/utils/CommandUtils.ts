import { exec, spawn } from 'child_process';
import { ResponseData } from '../data/ResponseData';

export class CommandUtils {
  public static async executeCommand(path: string, command: string): Promise<ResponseData> {
    return new Promise<ResponseData>((resolve, reject) => {
      exec(command, { cwd: path }, (error, stdout, stderr) => {
        if (error) {
          reject(new ResponseData(false, error.message + '\n' + stderr));
        } else {
          resolve(new ResponseData(true, stdout));
        }
      });
    });
  }

  // TODO NOT WORKING AS EXPECTED (LOG OUTPUT LIVE)
  public static async executeCommandSpawn(path: string, command: string): Promise<ResponseData> {
    return new Promise<ResponseData>((resolve, reject) => {
      const child = spawn('npm', ['install'], { cwd: path });
      child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });
      child.stderr.on('data', (data) => {
        reject(new ResponseData(false, data));
      });
      child.on('close', (code) => {
        resolve(new ResponseData(true, `child process exited with code ${code}`));
      });
    });
  }
}
