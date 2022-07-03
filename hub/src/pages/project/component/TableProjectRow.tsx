import React from "react";
import { Divider, Segment, Table } from "semantic-ui-react";

function TableProjectRow(props: any) {
  return (
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          {props.columnNames.map((name: string, i: number) => {
            return <Table.HeaderCell>{name}</Table.HeaderCell>;
          })}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.rows.map((rowData: any[], i: number) => {
          return (
            <Table.Row>
              {rowData.map((value: any, i: number) => {
                return (
                  <Table.Cell style={{ padding: "5px" }}>{value}</Table.Cell>
                );
              })}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default TableProjectRow;
