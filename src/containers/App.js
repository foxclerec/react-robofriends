import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <>
          <h1 className="tc">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </>
      );
    }
  }
}

export default App;
