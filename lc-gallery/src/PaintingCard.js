import React from "react";

const PaintingCard = props => {
  return (
    <div className="artTile">
      <h3>{props.painting.title}</h3>
      <p>Artist: {props.painting.artist.name}</p>
      <p>{props.painting.date}</p>
      <img alt="" src={props.painting.image} />
    </div>
  );
};

export default PaintingCard;
