import React, { Component } from "react";
import TacoBuilder from "../../components/TacoBuilder/TacoBuilder";
import TacoSummary from "../../components/TacoSummary/TacoSummary";
import TacoList from "../../components/TacoList/TacoList";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTaco: {
        shell: "Not Chosen",
        baseLayer: "Not Chosen",
        mixin: "Not Chosen",
        condiment: "Not Chosen",
        seasoning: "Not Chosen",
        description: "None"
      },
      tacoDB: []
    };
    this.handleTacoBuilding = this.handleTacoBuilding.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.removeTaco = this.removeTaco.bind(this);
  }

  handleTacoBuilding(taco) {
    this.setState({ currentTaco: taco });
  }

  submitOrder(taco) {
    let newTacoDB = this.state.tacoDB;
    newTacoDB.push(taco);
    alert(taco.description);
    this.setState({
      tacoDB: newTacoDB,
      currentTaco: {
        shell: "Not Chosen",
        baseLayer: "Not Chosen",
        mixin: "Not Chosen",
        condiment: "Not Chosen",
        seasoning: "Not Chosen",
        description: "None"
      }
    });
  }

  removeTaco(i) {
    let newTacoDB = this.state.tacoDB;
    newTacoDB.splice(i, 1);
    this.setState({ tacoDB: newTacoDB });
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="title">
            <h1>Taco Assembler</h1>
          </div>
          <TacoBuilder
            curr={this.state.currentTaco}
            handler={this.handleTacoBuilding}
          />
          <TacoSummary
            submit={this.submitOrder}
            taco={this.state.currentTaco}
          />
          <TacoList removeTaco={this.removeTaco} tacos={this.state.tacoDB} />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
