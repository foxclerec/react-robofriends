import React from "react";

const Card = (props) => {
  return (
    <div className="tc bg-light-green br3 w-20 pa3 mr3 mb3 grow shadow-5">
      <img src={`https://robohash.org/${props.id}?size=180x180`} alt="robots" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
