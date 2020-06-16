
import React, { Component } from "react";
import RecipeForm from "../components/RecipeForm";
// import API from '../utils/API'
import IngredientForm from "../components/IngredientForm";
import IngredientsAddedList from "../components/IngredientsAddedList";
import ImageUploadForm from "../components/ImageUploadForm";

class RecipeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [],
      q: "",
      message: "Create a recipe",
      title: "",
      description: "",
      instruction: [],
      ingredients: [],
      tips: "",
      yeild: "",
      categories: [],
      feedback: [],
      activeTime: 0,
      inActiveTime: 0,
      // addons: "",
      // forkedFrom: "",
      images: [],
      pubDate: Date.now(),
      likes: 0,
      saves: 0,
      forks: 0,
      // author: "",
    };
    this.addIngredient = this.addIngredient.bind(this);
  }

  updateState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  addIngredient(ingredient) {
    this.setState({
      ingredients: [...this.state.ingredients, ingredient],
    });
  }

  handleRecipeInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const ingredientIds = this.state.ingredients.map((el) => el._id);

    return (
      <div style={{ display: "flex" }}>
        <div>
          <IngredientForm q={this.state.q} addIngredient={this.addIngredient} />
          <ImageUploadForm q={this.state.q} />
          <RecipeForm
            //  handleRecipeCreate={this.handleRecipeCreate}
            //  handleIngredientCreate={this.handleIngredientCreate}
            //  handleFormSubmit={this.handleFormSubmit}
            q={this.state.q}
            recipe={this.state}
            updateState={this.updateState.bind(this)}
            handleRecipeInputChange={this.handleRecipeInputChange.bind(this)}
            ingredients={this.state.ingredients}
          />
        </div>
        <IngredientsAddedList ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default RecipeCreate;