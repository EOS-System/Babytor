export class ElectronManager {
  public static closeCurrentWindow() {
    (window as any).electronAPI.closeCurrentWindow();
  }

  public static minimizeCurrentWindow() {
    (window as any).electronAPI.minimizeCurrentWindow();
    }
    
  public static enlargeCurrentWindow() {
    (window as any).electronAPI.enlargeCurrentWindow();
  }
}
