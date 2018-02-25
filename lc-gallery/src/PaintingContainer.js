import React from "react";
import paintings from "./PaintingData";
import PaintingCard from "./PaintingCard.js";

class PaintingContainer extends React.Component {
  state = {
    paintings: paintings
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/paintings")
      .then(res => res.json())
      .then(json => console.log(json));
  }

  render() {
    return (
      <div>
        {this.state.paintings.map((p, index) => (
          <PaintingCard painting={p} key={index} />
        ))}
      </div>
    );
  }
}

export default PaintingContainer;
