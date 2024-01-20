import React from "react";
import Beer from "./Beer";

class Beers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          beers: data,
        });
      });
  }

  render() {
    return (
      <>
        <ul className="beers-list">
          {this.state.beers.map((beer, index) => (
            <Beer key={index} beer={beer} />
          ))}
        </ul>
      </>
    );
  }
}

export default Beers;
