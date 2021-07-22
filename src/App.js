import React, { Component } from "react";
import Contacts from "./component/contact";
class App extends Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=121")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data.results });
      })
      .catch(console.log);
  }
  render() {
    return <Contacts contacts={this.state.contacts} />;
  }
}

export default App;
