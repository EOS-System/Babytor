import "./css/index.css";
import "semantic-ui-css/semantic.min.css";
import { ElectronManager } from "./ElectronManager";
const options = [
  { key: "remote", icon: "git", text: "Clone a repository", value: "remote" },
  {
    key: "local",
    icon: "computer",
    text: "From this computer",
    value: "local",
  },
];
function WindowBar() {
  return (
    <div id="window-bar">
      <button
        className="window-button button-close"
        onClick={() => ElectronManager.closeCurrentWindow()}
      ></button>
      <button
        className="window-button button-enlarge"
        onClick={() => ElectronManager.enlargeCurrentWindow()}
      ></button>
      <button
        className="window-button button-minimize"
        onClick={() => ElectronManager.minimizeCurrentWindow()}
      ></button>
    </div>
  );
}

export default WindowBar;
