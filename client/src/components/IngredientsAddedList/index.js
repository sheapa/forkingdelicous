import React from "react";
import IngredientAdded from "../IngredientAdded";

class IngredientsAddedList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("ingredientsAddedList rendered");
    console.log(
      `this.props.ingredients: ${JSON.stringify(this.props.ingredients)}`
    );
    return (
      <div>
        <h4>Ingredients Added</h4>
        <ul>
          {this.props.ingredients.map(function (ingredient) {
            console.log(`ingredient.name: ${ingredient.name}`);
            return <IngredientAdded name={ingredient.name} />;
          })}
        </ul>
      </div>
    );
  }
}

export default IngredientsAddedList;