import React from "react";
import Beers from "./components/Beers";
import "./app.css"; // Ensure this path is correct for your CSS file

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
    };
  }

  render() {
    return (
      <>
      <img src="https://img.freepik.com/premium-vector/beer-music-logo-template_85893-76.jpg?w=740" alt=""  class="custom-image"/>
       <Beers />
      </>
    );
  }
}

export default App;
