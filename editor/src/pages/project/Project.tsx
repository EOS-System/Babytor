import "./project.css";
import { Button } from "semantic-ui-react";
import ButtonDropdown from "../../components/ButtonDropdown";
import TableProjectRow from "../../components/TableProjectRow";
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
    <div className="project full-height">
      <div id="hub-manager">&nbsp;</div>
      <div id="project-actions">&nbsp;</div>
      <div id="tasks">&nbsp;</div>
      <div id="project-search-title">&nbsp;</div>
      <div id="project-create-open">
        <Button>Create a project</Button>
        <ButtonDropdown
          name={"Open project"}
          options={options}
        ></ButtonDropdown>
      </div>
      <div id="project-list">
        <TableProjectRow
          columnNames={["Name", "Modified", "Editor version"]}
          rows={[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
          ]}
        ></TableProjectRow>
      </div>
      <div id="hub-version">&nbsp;</div>
    </div>
  );
}

export default Project;
