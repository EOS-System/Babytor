import { Dropdown } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
function ButtonDropdown(props: any) {
  return (
    <Button.Group color="teal">
      <Button>{props.name}</Button>
      <Dropdown
        className="button icon"
        floating
        options={props.options}
        trigger={<></>}
      />
    </Button.Group>
  );
}

export default ButtonDropdown;
