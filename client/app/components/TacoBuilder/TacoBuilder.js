import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class TacoBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shells: [],
      condiments: [],
      mixins: [],
      seasonings: [],
      baseLayers: [],

      userShell: this.props.curr.shell,
      userBaseLayer: this.props.curr.baseLayer,
      userCondiment: this.props.curr.condiment,
      userMixin: this.props.curr.mixin,
      userSeasoning: this.props.curr.seasoning,
      userDescription: this.props.curr.description
    };
    this.grabData = this.grabData.bind(this);
    this.updateTaco = this.updateTaco.bind(this);
    this.randomTaco = this.randomTaco.bind(this);
    this.descriptionCreator = this.descriptionCreator.bind(this);
  }

  grabData() {
    fetch("https://tacos-ocecwkpxeq.now.sh/shells/")
      .then(res => res.json())
      .then(json => this.setState({ shells: json }));
    fetch("https://tacos-ocecwkpxeq.now.sh/mixins/")
      .then(res => res.json())
      .then(json => this.setState({ mixins: json }));
    fetch("https://tacos-ocecwkpxeq.now.sh/seasonings/")
      .then(res => res.json())
      .then(json => this.setState({ seasonings: json }));
    fetch("https://tacos-ocecwkpxeq.now.sh/condiments/")
      .then(res => res.json())
      .then(json => this.setState({ condiments: json }));
    fetch("https://tacos-ocecwkpxeq.now.sh/baseLayers/")
      .then(res => res.json())
      .then(json => this.setState({ baseLayers: json }));
  }

  descriptionCreator() {
    fetch(
      "https://words.bighugelabs.com/api/2/fefa6c748351403c39dc26afe7520e2c/delicious/json"
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        let description = "";
        description +=
          "A " +
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " taco made with a ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          this.state.userShell +
          " shell. With a ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          this.state.userBaseLayer +
          " base layer. Mixed with ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          this.state.userMixin +
          " . Seasoned with ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          this.state.userSeasoning +
          " topped off with ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          this.state.userCondiment +
          " for the perfect taco experience. ";
        return description;
      });
  }

  randomTaco() {
    let taco = {};
    taco.shell = this.state.shells[
      Math.floor(Math.random() * this.state.shells.length)
    ].name;
    taco.baseLayer = this.state.baseLayers[
      Math.floor(Math.random() * this.state.baseLayers.length)
    ].name;
    taco.condiment = this.state.condiments[
      Math.floor(Math.random() * this.state.condiments.length)
    ].name;
    taco.mixin = this.state.mixins[
      Math.floor(Math.random() * this.state.mixins.length)
    ].name;
    taco.seasoning = this.state.seasonings[
      Math.floor(Math.random() * this.state.seasonings.length)
    ].name;
    fetch(
      "https://words.bighugelabs.com/api/2/fefa6c748351403c39dc26afe7520e2c/delicious/json"
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        let description = "";
        description +=
          "A " +
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " taco made with a ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          taco.shell +
          " shell. With a ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          taco.baseLayer +
          " base layer. Mixed with ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          taco.mixin +
          " . Seasoned with ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          taco.seasoning +
          " topped off with ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          taco.condiment +
          " for the perfect taco experience. ";
        this.setState({ userDescription: description });
        taco.description = this.state.userDescription;
        this.props.handler(taco);
      });
  }

  updateTaco() {
    let taco = {};
    taco.shell = this.state.userShell;
    taco.baseLayer = this.state.userBaseLayer;
    taco.condiment = this.state.userCondiment;
    taco.mixin = this.state.userMixin;
    taco.seasoning = this.state.userSeasoning;
    fetch(
      "http://words.bighugelabs.com/api/2/fefa6c748351403c39dc26afe7520e2c/delicious/json"
    )
      .then(res => res.json())
      .then(json => {
        let description = "";
        description +=
          "A " +
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " taco made with a ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          this.state.userShell +
          " shell. With a ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          this.state.userBaseLayer +
          " base layer. Mixed with ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          this.state.userMixin +
          " . Seasoned with ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          this.state.userSeasoning +
          " topped off with ";
        description +=
          json.adjective.syn[
            Math.floor(Math.random() * json.adjective.syn.length)
          ] +
          " " +
          this.state.userCondiment +
          " for the perfect taco experience. ";
        this.setState({ userDescription: description });
        taco.description = this.state.userDescription;
        this.props.handler(taco);
      });
  }
  componentWillMount() {
    this.grabData();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      userShell: newProps.curr.shell,
      userBaseLayer: newProps.curr.baseLayer,
      userCondiment: newProps.curr.condiment,
      userMixin: newProps.curr.mixin,
      userSeasoning: newProps.curr.seasoning
    });
  }

  render() {
    return (
      <div className="taco_builder">
        <div style={{ textAlign: "center" }}>
          {" "}
          <Button onClick={() => this.randomTaco()} positive>
            Surprise Me!
          </Button>
        </div>

        <h2 className="categories">Choose Shell</h2>
        <ul
          onClick={e => {
            this.setState({ userShell: e.target.getAttribute("data") }, () =>
              this.updateTaco()
            );
          }}
        >
          {this.state.shells.map((shells, i) => (
            <li className="items" data={shells.name} key={i}>
              {shells.name}
            </li>
          ))}
        </ul>

        <h2 className="categories">Choose Base Layer</h2>
        <ul
          onClick={e => {
            this.setState(
              { userBaseLayer: e.target.getAttribute("data") },
              () => this.updateTaco()
            );
          }}
        >
          {this.state.baseLayers.map((baseLayers, i) => (
            <li className="items" data={baseLayers.name} key={i}>
              {baseLayers.name}
            </li>
          ))}
        </ul>

        <h2 className="categories">Choose Mixin</h2>
        <ul
          onClick={e => {
            this.setState({ userMixin: e.target.getAttribute("data") }, () =>
              this.updateTaco()
            );
          }}
        >
          {this.state.mixins.map((mixins, i) => (
            <li className="items" data={mixins.name} key={i}>
              {mixins.name}
            </li>
          ))}
        </ul>

        <h2 className="categories">Choose Seasoning</h2>
        <ul
          onClick={e => {
            this.setState(
              { userSeasoning: e.target.getAttribute("data") },
              () => this.updateTaco()
            );
          }}
        >
          {this.state.seasonings.map((seasonings, i) => (
            <li className="items" data={seasonings.name} key={i}>
              {seasonings.name}
            </li>
          ))}
        </ul>

        <h2 className="categories">Choose Condiment</h2>
        <ul
          onClick={e => {
            this.setState(
              { userCondiment: e.target.getAttribute("data") },
              () => this.updateTaco()
            );
          }}
        >
          {this.state.condiments.map((condiments, i) => (
            <li className="items" data={condiments.name} key={i}>
              {condiments.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TacoBuilder;
