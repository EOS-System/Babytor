import "./project.css";
import { Button, Header } from "semantic-ui-react";
import ButtonDropdown from "../../components/ButtonDropdown";
import TableProjectRow from "./component/TableProjectRow";
import pjson from "../../../package.json";
import "semantic-ui-css/semantic.min.css";
const options = [
  { key: "remote", icon: "git", text: "Clone a repository", value: "remote" },
  {
    key: "local",
    icon: "computer",
    text: "From this computer",
    value: "local",
  },
];
function Project() {
  return (
    <div className="project page">
      <div id="hub-manager" className="center-helper">
        <Button
          className="side-background ninetyfullWidth"
          content="Settings"
          icon="settings"
        />
      </div>
      <div id="project-actions" className="center-helper row-list">
        <Button
          className="side-background ninetyfullWidth"
          content="Projects"
          icon="folder"
        />
        <br />
        <Button
          className="side-background ninetyfullWidth"
          content="Installs"
          icon="box"
        />
        <br />
        <Button
          className="side-background ninetyfullWidth"
          content="Information"
          icon="info"
        />
        <br />
        <Button
          className="side-background ninetyfullWidth"
          content="Github"
          icon="github"
        />
      </div>
      <div id="tasks" className="center-helper">
        <Button
          className="ninetyfullWidth side-background"
          content="Tasks"
          icon="tasks"
        />
      </div>
      <div id="project-search-title" className="center-helper">
        <Header as="h1">Project</Header>
      </div>
      <div id="project-create-open" className="center-helper">
        <Button content="Create a project" icon="add" />
        <ButtonDropdown
          name={"Open project"}
          options={options}
        ></ButtonDropdown>
      </div>
      <div id="project-list">
        <TableProjectRow
          columnNames={["Name", "Path", "Modified", "Editor version"]}
          rows={[
            [
              "Sword Tournament Online",
              "E:OneDrive - Université Nice Sophia AntipolisMiage S5",
              ,
              "a minute ago",
              "Babytor StarShip",
            ],
          ]}
        ></TableProjectRow>
      </div>
      <div id="hub-version" className="center-helper">
        <Header as="h4">{pjson.version}</Header>
      </div>
    </div>
  );
}

export default Project;
