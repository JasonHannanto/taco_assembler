import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class TacoSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shell: "Not Chosen",
      baseLayer: "Not Chosen",
      mixin: "Not Chosen",
      condiment: "Not Chosen",
      seasoning: "Not Chosen",
      description: "None"
    };
  }

  componentWillReceiveProps(newProp) {
    this.setState({
      shell: newProp.taco.shell,
      baseLayer: newProp.taco.baseLayer,
      mixin: newProp.taco.mixin,
      condiment: newProp.taco.condiment,
      seasoning: newProp.taco.seasoning,
      description: newProp.taco.description
    });
  }

  sendOrder() {
    if (this.state.shell == "Not Chosen") {
      alert("Please select a shell");
      return;
    }
    if (this.state.baseLayer == "Not Chosen") {
      alert("Please select a Base Layer");
      return;
    }
    if (this.state.mixin == "Not Chosen") {
      alert("Please select a Mixin");
      return;
    }
    if (this.state.seasoning == "Not Chosen") {
      alert("Please select a Seasoniong");
      return;
    }
    if (this.state.condiment == "Not Chosen") {
      alert("Please select a Condiment");
      return;
    }

    this.props.submit(this.state);
  }

  render() {
    return (
      <div className="taco_summary">
        <h2>Current Order</h2>
        <h3>Shell</h3>
        <p>{this.state.shell}</p>
        <h3>Base Layer</h3>
        <p>{this.state.baseLayer}</p>
        <h3>Mixin</h3>
        <p>{this.state.mixin}</p>
        <h3>Seasoning</h3>
        <p>{this.state.seasoning}</p>
        <h3>Condiment</h3>
        <p>{this.state.condiment}</p>
        <Button
          onClick={e => this.sendOrder()}
          style={{ marginTop: "10px" }}
          color="blue"
        >
          Submit Order
        </Button>
      </div>
    );
  }
}

export default TacoSummary;
