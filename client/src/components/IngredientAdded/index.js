import React from "react";

const IngredientAdded = (props) => {
  return <li key={props.name}>{props.name}</li>;
};

export default IngredientAdded;