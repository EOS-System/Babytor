import { useState } from "react";
import { Dropdown, Grid } from "semantic-ui-react";
import "../css/project.css";
import { Button } from "semantic-ui-react";
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
        <Button>Create a project</Button>{" "}
        <Button.Group color="teal">
          <Button>Save</Button>
          <Dropdown
            className="button icon"
            floating
            options={options}
            trigger={<></>}
          />
        </Button.Group>
      </div>
      <div id="project-list">&nbsp;</div>
      <div id="hub-version">&nbsp;</div>
    </div>
  );
}

export default Project;
