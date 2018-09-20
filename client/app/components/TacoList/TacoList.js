import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";

class TacoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tacos: this.props.tacos
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ tacos: newProps.tacos });
  }

  render() {
    return (
      <div className="taco_list">
        <h2>Shopping Cart</h2>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Number</Table.HeaderCell>
              <Table.HeaderCell>Shell</Table.HeaderCell>
              <Table.HeaderCell>Base Layer</Table.HeaderCell>
              <Table.HeaderCell>Mixin</Table.HeaderCell>
              <Table.HeaderCell>Seasoning</Table.HeaderCell>
              <Table.HeaderCell>Condiment</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.tacos.map((taco, i) => (
              <Table.Row key={i}>
                <Table.Cell selectable>
                  <a onClick={() => alert(taco.description)}>{i}</a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a onClick={() => alert(taco.description)}>{taco.shell}</a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a onClick={() => alert(taco.description)}>
                    {taco.baseLayer}
                  </a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a onClick={() => alert(taco.description)}>{taco.mixin}</a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a onClick={() => alert(taco.description)}>
                    {taco.seasoning}
                  </a>
                </Table.Cell>
                <Table.Cell selectable>
                  <a onClick={() => alert(taco.description)}>
                    {taco.condiment}
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    row={i}
                    onClick={e => {
                      this.props.removeTaco(e.target.getAttribute("row"));
                    }}
                    negative
                  >
                    X
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default TacoList;
